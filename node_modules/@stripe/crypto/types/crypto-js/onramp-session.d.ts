import {OnrampSessionResult} from '../api/onramp';

export interface OnrampAppearanceOptions {
  theme: 'light' | 'dark';
}

export interface OnrampSessionOptions {
  clientSecret: string;
  appearance?: OnrampAppearanceOptions;
}

export interface OnrampUIEventMap {
  onramp_ui_loaded: {
    type: 'onramp_ui_loaded';
    payload: {session: OnrampSessionResult};
  };
  onramp_session_updated: {
    type: 'onramp_session_updated';
    payload: {session: OnrampSessionResult};
  };
}

export type OnrampUIEvents = OnrampUIEventMap[keyof OnrampUIEventMap];

export type OnrampUIEventListener<K extends keyof OnrampUIEventMap> = (
  event: OnrampUIEventMap[K]
) => void;

export interface OnrampSession {
  /**
   * Attaches Onramp UI to the DOM.
   *
   * You need to create a container DOM element to mount the UI element.
   *
   * @param domElement either a CSS Selector (e.g., '#onramp-element') or a DOM element.
   */
  mount(domElement: string | HTMLElement): OnrampSession;

  /**
   * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
   *
   * @param type A case-sensitive string representing the event type to listen for. Use '*' to match all events.
   * @param listener A callback function that accepts an single Event object corresponding to the event type
   */
  addEventListener(
    type: '*',
    listener: OnrampUIEventListener<any>
  ): OnrampSession;
  addEventListener<K extends keyof OnrampUIEventMap>(
    type: K,
    listener: OnrampUIEventListener<K>
  ): OnrampSession;

  /**
   * Removes the event listener in event listener list with the same type, and callback.
   * @param type A string which specifies the type of event for which to remove an event listener. Use '*' to match all events.
   * @param listener The event listener function of the event handler to remove from the event target.
   */
  removeEventListener(
    type: '*',
    listener: OnrampUIEventListener<any>
  ): OnrampSession;
  removeEventListener<K extends keyof OnrampUIEventMap>(
    type: K,
    listener: OnrampUIEventListener<K>
  ): OnrampSession;
}
