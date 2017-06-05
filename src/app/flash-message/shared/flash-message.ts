export type FlashMessageType = 'success' | 'info' | 'waring' | 'danger';
export interface FlashMessage {
    message: string;
    type: FlashMessageType;
}
