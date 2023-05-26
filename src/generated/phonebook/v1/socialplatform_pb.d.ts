// package: phonebook.v1
// file: phonebook/v1/socialplatform.proto

import * as jspb from "google-protobuf";

export class SocialPlatform extends jspb.Message {
  getPlatform(): SocialPlatform.SocialPlatformOptionsMap[keyof SocialPlatform.SocialPlatformOptionsMap];
  setPlatform(value: SocialPlatform.SocialPlatformOptionsMap[keyof SocialPlatform.SocialPlatformOptionsMap]): void;

  getProfile(): string;
  setProfile(value: string): void;

  hasProfileUrl(): boolean;
  clearProfileUrl(): void;
  getProfileUrl(): string;
  setProfileUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialPlatform.AsObject;
  static toObject(includeInstance: boolean, msg: SocialPlatform): SocialPlatform.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialPlatform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialPlatform;
  static deserializeBinaryFromReader(message: SocialPlatform, reader: jspb.BinaryReader): SocialPlatform;
}

export namespace SocialPlatform {
  export type AsObject = {
    platform: SocialPlatform.SocialPlatformOptionsMap[keyof SocialPlatform.SocialPlatformOptionsMap],
    profile: string,
    profileUrl: string,
  }

  export interface SocialPlatformOptionsMap {
    WHATSAPP: 0;
    FACEBOOK: 1;
    INSTAGRAM: 2;
  }

  export const SocialPlatformOptions: SocialPlatformOptionsMap;
}

