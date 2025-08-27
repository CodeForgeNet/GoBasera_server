import { Injectable, NotFoundException } from '@nestjs/common';

type Status = 'active' | 'closed';

export interface Announcement {
  id: string;
  title: string;
  description?: string;
  status: Status;
  createdAt: string;
}

@Injectable()
export class AnnouncementsService {
  private announcements: Announcement[] = [];

  create(dto: { title: string; description?: string }): Announcement {
    const announcement: Announcement = {
      id: Date.now().toString(),
      title: dto.title,
      description: dto.description,
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    this.announcements.push(announcement);
    return announcement;
  }

  findAll(): Announcement[] {
    // return newest first
    return [...this.announcements].sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt),
    );
  }

  updateStatus(id: string, status: Status): Announcement {
    const ann = this.announcements.find((a) => a.id === id);
    if (!ann) throw new NotFoundException('Announcement not found');
    if (status !== 'active' && status !== 'closed') {
      throw new Error('Invalid status');
    }
    ann.status = status;
    return ann;
  }
}
