"""
The announcement Service allows the API to manipulate announcement data in the database.
"""

from fastapi import Depends

from sqlalchemy.orm import Session

from backend.database import db_session
from backend.entities.announcement_entity import AnnouncementEntity

from backend.models.user import User
from backend.services.exceptions import (
    ResourceNotFoundException,
    UserPermissionException,
)
from ..models.announcement import Announcement

class AnnouncementService:
    """Backend service that enables direct modification of announcement data"""
    def __init__(
        self,
        session: Session = Depends(db_session),
    ):
        """Initializes the `EventService` session"""
        self._session = session

    def getAnnouncements(self, subject: User) -> list[Announcement]:
        announcements = self._session.query(AnnouncementEntity).where(AnnouncementEntity.user_id == subject.id).all()
        models = [announcement.to_model() for announcement in announcements]
        return models
    
    def getAnnouncement(self, subject: User, announcement_id: int) -> Announcement:
        announcement = self._session.get(AnnouncementEntity, announcement_id)
        if announcement == None:
            raise(ResourceNotFoundException)
        model = announcement.to_model()
        # if subject.id != announcement.user_id:
        #     raise(UserPermissionException("announcement.view", f"announcements/{announcement_id}"))
        return model
    
    def createAnnouncement(self, subject: User, announcement: Announcement) -> Announcement:
        if announcement.id is not None:
            announcement.id = None

        entity = AnnouncementEntity.from_model(subject, announcement)
        self._session.add(entity)

        self._session.commit()
        return entity.to_model()
    
    def updateAnnouncement(self, subject: User, announcement: Announcement) -> Announcement:
        announcementEntity = self._session.get(AnnouncementEntity, announcement.id)
        if announcementEntity == None:
            raise(ResourceNotFoundException)
        # if announcementEntity.user_id != subject.id:
        #     raise(UserPermissionException("announcement.view", f"announcements/{announcement.id}"))
        
        announcementEntity.headline = announcement.headline
        announcementEntity.synopsis = announcement.synopsis
        announcementEntity.main_story = announcement.main_story
        announcementEntity.author = announcement.author
        announcementEntity.organization = announcement.organization
        announcementEntity.state = announcement.state
        announcementEntity.slug = announcement.slug
        announcementEntity.image_url = announcement.image_url
        announcementEntity.publish_date = announcement.publish_date
        announcementEntity.modification_date = announcement.modification_date
        self._session.commit()
        return announcementEntity.to_model()
    
    def deleteAnnouncement(self, subject: User, announcement_id: int) ->None:
        entity = self._session.get(AnnouncementEntity,announcement_id)
        if entity is None:
            raise(ResourceNotFoundException)
        # if announcementEntity.user_id != subject.id:
        #     raise(UserPermissionException("announcement.view", f"announcements/{announcement.id}"))
        self._session.delete(entity)
        self._session.commit()

