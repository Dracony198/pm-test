import { User } from './auth';

export interface DutySchedule {
  id: number;
  date: string;
  students: User[];
  status: DutyStatus;
  createdBy: User;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export enum DutyStatus {
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface DutySwapRequest {
  id: number;
  fromStudent: User;
  toStudent: User;
  fromDate: string;
  toDate: string;
  status: SwapStatus;
  reason?: string;
  createdAt: string;
}

export enum SwapStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface CreateDutyRequest {
  date: string;
  studentIds: number[];
  notes?: string;
}
