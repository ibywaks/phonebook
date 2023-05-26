// package: phonebook.v1
// file: phonebook/v1/contact.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as phonebook_v1_socialplatform_pb from "../../phonebook/v1/socialplatform_pb";
import * as phonebook_v1_emergencycontactdetails_pb from "../../phonebook/v1/emergencycontactdetails_pb";
import * as phonebook_v1_address_pb from "../../phonebook/v1/address_pb";

export class Contact extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string;
  setEmail(value: string): void;

  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;
  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  clearSocialPlatformsList(): void;
  getSocialPlatformsList(): Array<phonebook_v1_socialplatform_pb.SocialPlatform>;
  setSocialPlatformsList(value: Array<phonebook_v1_socialplatform_pb.SocialPlatform>): void;
  addSocialPlatforms(value?: phonebook_v1_socialplatform_pb.SocialPlatform, index?: number): phonebook_v1_socialplatform_pb.SocialPlatform;

  hasEmergencyContact(): boolean;
  clearEmergencyContact(): void;
  getEmergencyContact(): phonebook_v1_emergencycontactdetails_pb.EmergencyContactDetails | undefined;
  setEmergencyContact(value?: phonebook_v1_emergencycontactdetails_pb.EmergencyContactDetails): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): phonebook_v1_address_pb.Address | undefined;
  setAddress(value?: phonebook_v1_address_pb.Address): void;

  getIsBlocked(): boolean;
  setIsBlocked(value: boolean): void;

  getIsFavorite(): boolean;
  setIsFavorite(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contact.AsObject;
  static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contact;
  static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
  export type AsObject = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    socialPlatformsList: Array<phonebook_v1_socialplatform_pb.SocialPlatform.AsObject>,
    emergencyContact?: phonebook_v1_emergencycontactdetails_pb.EmergencyContactDetails.AsObject,
    address?: phonebook_v1_address_pb.Address.AsObject,
    isBlocked: boolean,
    isFavorite: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

