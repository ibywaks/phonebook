// package: phonebook.v1
// file: phonebook/v1/address.proto

import * as jspb from "google-protobuf";

export class Address extends jspb.Message {
  getAddressLine1(): string;
  setAddressLine1(value: string): void;

  hasAddressLine2(): boolean;
  clearAddressLine2(): void;
  getAddressLine2(): string;
  setAddressLine2(value: string): void;

  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): string;
  setPostalCode(value: string): void;

  hasCity(): boolean;
  clearCity(): void;
  getCity(): string;
  setCity(value: string): void;

  hasState(): boolean;
  clearState(): void;
  getState(): string;
  setState(value: string): void;

  hasCountry(): boolean;
  clearCountry(): void;
  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    addressLine1: string,
    addressLine2: string,
    postalCode: string,
    city: string,
    state: string,
    country: string,
  }
}

