import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ContactFormInput {
    name: string;
    email: string;
    company: string;
    interestType: string;
    message: string;
    department: string;
    phoneNumber: string;
    position: string;
}
export interface CommonSection {
    content: string;
    sectionTitle: string;
    images: Array<ExternalBlob>;
}
export interface ContentData {
    supportRequested: CommonSection;
    marketStrategy: CommonSection;
    nextSteps: CommonSection;
    aboutCompany: CommonSection;
    hero: CommonSection;
    whyRayagada: CommonSection;
    projectVision: CommonSection;
    socialImpact: CommonSection;
    technicalSpecs: CommonSection;
    financialOverview: CommonSection;
    valueChain: CommonSection;
}
export interface ContactInfo {
    email: string;
    address: string;
    phone: string;
    representative: string;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllContent(): Promise<ContentData>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<ContactInfo>;
    getUnreadMessagesCount(): Promise<bigint>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(form: ContactFormInput): Promise<void>;
    updateSection(section: string, content: CommonSection): Promise<void>;
    uploadSectionImage(section: string, image: ExternalBlob): Promise<void>;
}
