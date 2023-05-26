// package: phonebook.v1
// file: phonebook/v1/phonebook.proto

import * as jspb from "google-protobuf";
import * as phonebook_v1_contact_pb from "../../phonebook/v1/contact_pb";

export class PhoneBook extends jspb.Message {
  clearContactList(): void;
  getContactList(): Array<phonebook_v1_contact_pb.Contact>;
  setContactList(value: Array<phonebook_v1_contact_pb.Contact>): void;
  addContact(value?: phonebook_v1_contact_pb.Contact, index?: number): phonebook_v1_contact_pb.Contact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneBook.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneBook): PhoneBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneBook;
  static deserializeBinaryFromReader(message: PhoneBook, reader: jspb.BinaryReader): PhoneBook;
}

export namespace PhoneBook {
  export type AsObject = {
    contactList: Array<phonebook_v1_contact_pb.Contact.AsObject>,
  }
}

