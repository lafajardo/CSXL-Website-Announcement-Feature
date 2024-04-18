"""Announcement API Announcement routes are used to create, retrieve, and update Announcements."""

from fastapi import APIRouter, Depends

from backend.api.authentication import registered_user
from backend.models.user import User
from ..models.announcement import Announcement
from ..services.announcement import AnnouncementService

api = APIRouter(prefix="/api/announcement")
openapi_tags = {
    "name": "Announcement",
    "description": "Create, update, delete, and retrieve Announcements.",
}


@api.get("", response_model=list[Announcement], tags=["Announcement"])
def get_announcements(
    subject: User = Depends(registered_user),
    announcement_service: AnnouncementService = Depends(),
) -> list[Announcement]:
    return announcement_service.getAnnouncements(subject)


@api.get("/{id}", response_model=Announcement, tags=["Announcement"])
def get_announcement(
    id: int,
    subject: User = Depends(registered_user),
    announcement_service: AnnouncementService = Depends(),
) -> Announcement:
    return announcement_service.getAnnouncement(subject, id)


@api.post("", response_model=Announcement, tags=["Announcement"])
def create_announcement(
    announcement: Announcement,
    subject: User = Depends(registered_user),
    announcement_service: AnnouncementService = Depends(),
) -> Announcement:
    return announcement_service.createAnnouncement(subject, announcement)


@api.put("", response_model=Announcement, tags=["Announcement"])
def update_announcement(
    announcement: Announcement,
    subject: User = Depends(registered_user),
    announcement_service: AnnouncementService = Depends(),
) -> Announcement:
    return announcement_service.updateAnnouncement(subject, announcement)


@api.delete("/{id}", response_model=None, tags=["Announcement"])
def delete_announcement(
    id: int,
    subject: User = Depends(registered_user),
    announcement_service: AnnouncementService = Depends(),
) -> Announcement:
    return announcement_service.deleteAnnouncement(subject, id)
