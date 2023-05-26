// package: phonebook.v1
// file: phonebook/v1/emergencycontactdetails.proto

import * as jspb from "google-protobuf";

export class EmergencyContactDetails extends jspb.Message {
  getRelationship(): EmergencyContactDetails.RelationshipsMap[keyof EmergencyContactDetails.RelationshipsMap];
  setRelationship(value: EmergencyContactDetails.RelationshipsMap[keyof EmergencyContactDetails.RelationshipsMap]): void;

  hasCustomLabel(): boolean;
  clearCustomLabel(): void;
  getCustomLabel(): string;
  setCustomLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmergencyContactDetails.AsObject;
  static toObject(includeInstance: boolean, msg: EmergencyContactDetails): EmergencyContactDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmergencyContactDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmergencyContactDetails;
  static deserializeBinaryFromReader(message: EmergencyContactDetails, reader: jspb.BinaryReader): EmergencyContactDetails;
}

export namespace EmergencyContactDetails {
  export type AsObject = {
    relationship: EmergencyContactDetails.RelationshipsMap[keyof EmergencyContactDetails.RelationshipsMap],
    customLabel: string,
  }

  export interface RelationshipsMap {
    BROTHER: 0;
    MOTHER: 1;
    SISTER: 2;
    FATHER: 3;
    FRIEND: 4;
    COUSIN: 5;
  }

  export const Relationships: RelationshipsMap;
}

