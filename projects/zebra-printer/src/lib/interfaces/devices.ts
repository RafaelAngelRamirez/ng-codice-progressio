export interface Device {
  name: string;
  deviceType: string;
  connection: string;
  uid: string;
  version: number;
  convertAndSendFile: Function;
  manufacturer: string;
  provider: string;
  read: Function;
  readAllAvailable: Function;
  readErrorCallback: Function;
  readFinishedCallback: Function;
  readRetries: number;
  readUntilStringReceived: Function;
  send: Function;
  sendErrorCallback: Function;
  sendFile: Function;
  sendFinishedCallback: Function;
  sendThenRead: Function;
  sendThenReadAllAvailable: Function;
  sendThenReadUntilStringReceived: Function;
  sendUrl: Function;
}
