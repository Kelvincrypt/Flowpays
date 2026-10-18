// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract FlowPay is ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum Frequency {
        Once,
        Weekly,
        Monthly
    }

    enum Category {
        Rent,
        School,
        Subscription,
        Other
    }

    struct Schedule {
        address owner;
        address recipient;
        uint256 amount;
        Frequency frequency;
        string label;
        Category category;
        uint256 nextExecuteAt;
        bool active;
    }

    struct Remittance {
        address sender;
        address recipient;
        uint256 amount;
        string corridorCode;
        string memo;
        uint256 timestamp;
    }

    IERC20 public immutable usdc;

    uint256 public nextScheduleId = 1;
    uint256 public nextRemittanceId = 1;

    mapping(uint256 => Schedule) private schedules;
    mapping(address => uint256[]) private userScheduleIds;

    mapping(uint256 => Remittance) private remittances;
    mapping(address => uint256[]) private userRemittanceIds;

    uint256 private constant MAX_TEXT_LENGTH = 80;
    uint256 private constant WEEK = 7 days;
    uint256 private constant MONTH = 30 days;

    uint256 private constant ARC_MAINNET_CHAIN_ID = 5042;
    address private constant ARC_MAINNET_USDC = 0x3600000000000000000000000000000000000000;

    event ScheduleCreated(
        uint256 indexed scheduleId,
        address indexed owner,
        address indexed recipient,
        uint256 amount,
        uint8 frequency
    );

    event ScheduleExecuted(
        uint256 indexed scheduleId,
        address indexed owner,
        address indexed recipient,
        uint256 amount,
        uint256 nextExecuteAt
    );

    event ScheduleCancelled(uint256 indexed scheduleId, address indexed owner);

    event RemittanceSent(
        uint256 indexed remittanceId,
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        string corridorCode,
        string memo,
        uint256 timestamp
    );

    constructor(address usdc_) {
        require(usdc_ != address(0), "FlowPay: zero USDC");

        if (block.chainid == ARC_MAINNET_CHAIN_ID) {
            require(usdc_ == ARC_MAINNET_USDC, "FlowPay: invalid Arc USDC");
        }

        usdc = IERC20(usdc_);
    }

    function createSchedule(
        address recipient,
        uint256 amount,
        Frequency frequency,
        string calldata label,
        Category category,
        uint256 nextExecuteAt
    ) external returns (uint256 scheduleId) {
        require(recipient != address(0), "FlowPay: zero recipient");
        require(amount > 0, "FlowPay: zero amount");
        require(bytes(label).length <= MAX_TEXT_LENGTH, "FlowPay: label too long");
        require(nextExecuteAt > 0, "FlowPay: invalid execute time");

        scheduleId = nextScheduleId++;

        schedules[scheduleId] = Schedule({
            owner: msg.sender,
            recipient: recipient,
            amount: amount,
            frequency: frequency,
            label: label,
            category: category,
            nextExecuteAt: nextExecuteAt,
            active: true
        });

        userScheduleIds[msg.sender].push(scheduleId);

        emit ScheduleCreated(scheduleId, msg.sender, recipient, amount, uint8(frequency));
    }

    function executeSchedule(uint256 scheduleId) external nonReentrant {
        Schedule storage schedule = schedules[scheduleId];
        require(schedule.owner != address(0), "FlowPay: schedule missing");
        require(schedule.active, "FlowPay: schedule inactive");
        require(schedule.owner == msg.sender, "FlowPay: not schedule owner");
        require(block.timestamp >= schedule.nextExecuteAt, "FlowPay: too early");

        // msg.sender == schedule.owner is enforced above; use msg.sender to avoid arbitrary-from pattern
        usdc.safeTransferFrom(msg.sender, schedule.recipient, schedule.amount);

        if (schedule.frequency == Frequency.Once) {
            schedule.active = false;
            schedule.nextExecuteAt = 0;
        } else if (schedule.frequency == Frequency.Weekly) {
            schedule.nextExecuteAt += WEEK;
        } else {
            schedule.nextExecuteAt += MONTH;
        }

        emit ScheduleExecuted(
            scheduleId,
            schedule.owner,
            schedule.recipient,
            schedule.amount,
            schedule.nextExecuteAt
        );
    }

    function cancelSchedule(uint256 scheduleId) external {
        Schedule storage schedule = schedules[scheduleId];
        require(schedule.owner != address(0), "FlowPay: schedule missing");
        require(schedule.active, "FlowPay: schedule inactive");
        require(schedule.owner == msg.sender, "FlowPay: not schedule owner");

        schedule.active = false;

        emit ScheduleCancelled(scheduleId, msg.sender);
    }

    function sendRemittance(
        address recipient,
        uint256 amount,
        string calldata corridorCode,
        string calldata memo
    ) external nonReentrant returns (uint256 remittanceId) {
        require(recipient != address(0), "FlowPay: zero recipient");
        require(amount > 0, "FlowPay: zero amount");
        require(bytes(corridorCode).length == 3, "FlowPay: invalid corridor");
        require(bytes(memo).length <= MAX_TEXT_LENGTH, "FlowPay: memo too long");

        usdc.safeTransferFrom(msg.sender, recipient, amount);

        remittanceId = nextRemittanceId++;

        remittances[remittanceId] = Remittance({
            sender: msg.sender,
            recipient: recipient,
            amount: amount,
            corridorCode: corridorCode,
            memo: memo,
            timestamp: block.timestamp
        });

        userRemittanceIds[msg.sender].push(remittanceId);

        emit RemittanceSent(
            remittanceId,
            msg.sender,
            recipient,
            amount,
            corridorCode,
            memo,
            block.timestamp
        );
    }

    function getSchedule(
        uint256 scheduleId
    )
        external
        view
        returns (
            address owner,
            address recipient,
            uint256 amount,
            Frequency frequency,
            string memory label,
            Category category,
            uint256 nextExecuteAt,
            bool active
        )
    {
        Schedule storage schedule = schedules[scheduleId];
        require(schedule.owner != address(0), "FlowPay: schedule missing");

        return (
            schedule.owner,
            schedule.recipient,
            schedule.amount,
            schedule.frequency,
            schedule.label,
            schedule.category,
            schedule.nextExecuteAt,
            schedule.active
        );
    }

    function getUserSchedules(address owner) external view returns (uint256[] memory) {
        return userScheduleIds[owner];
    }

    function getRemittanceHistory(address sender) external view returns (uint256[] memory) {
        return userRemittanceIds[sender];
    }

    function getRemittance(
        uint256 remittanceId
    )
        external
        view
        returns (
            address sender,
            address recipient,
            uint256 amount,
            string memory corridorCode,
            string memory memo,
            uint256 timestamp
        )
    {
        Remittance storage remittance = remittances[remittanceId];
        require(remittance.sender != address(0), "FlowPay: remittance missing");

        return (
            remittance.sender,
            remittance.recipient,
            remittance.amount,
            remittance.corridorCode,
            remittance.memo,
            remittance.timestamp
        );
    }
}
