"""Definition of SQLAlchemy table-backed object mapping entity for Announcements."""

from sqlalchemy import Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import Self
from datetime import datetime
from backend.entities.organization_entity import OrganizationEntity


# from backend.entities.user_entity import UserEntity


from backend.models.announcement import Announcement, AnnouncementState
from backend.models.user import User
from .entity_base import EntityBase

from sqlalchemy import Enum as SQLAlchemyEnum


class AnnouncementEntity(EntityBase):
    """Serves as the database model schema defining the shape of the `Announcement` table"""

    # Name for the announcements table in the PostgreSQL database
    __tablename__ = "announcements"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)

    headline: Mapped[str] = mapped_column(String, nullable=False, default = "")
    synopsis: Mapped[str] = mapped_column(String, nullable=False, default="")
    main_story: Mapped[str] = mapped_column(String, nullable=False, default="")
    author: Mapped[str] = mapped_column(String, nullable=False, default="")
    organization: Mapped[str] = mapped_column(String, nullable=False, default="")
    state: Mapped[AnnouncementState] = mapped_column(
        SQLAlchemyEnum(AnnouncementState), nullable=False
    )
    slug: Mapped[str] = mapped_column(String, nullable=False, default="")
    image_url: Mapped[str] = mapped_column(String, nullable=False, default="")
    publish_date: Mapped[datetime] = mapped_column(DateTime, nullable=False)
    modification_date: Mapped[datetime] = mapped_column(DateTime, nullable=False)

    # Foreign Key
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    #organization_id: Mapped[int] = mapped_column(ForeignKey("organization.id"))

    # Relationship Fields
    # organization: Mapped["OrganizationEntity"] = relationship(back_populates="announcements")

    user: Mapped["UserEntity"] = relationship(back_populates="announcements")

    @classmethod
    def from_model(cls, subject: User, model: Announcement) -> Self:
        return cls(

            id=model.id,
            headline=model.headline,
            synopsis=model.synopsis,
            main_story=model.main_story,
            author=model.author,
            state=model.state,
            slug=model.slug,
            image_url=model.image_url,
            publish_date=model.publish_date,
            modification_date=model.modification_date,
            #organization_id=model.organization_id,
            organization=model.organization,
            user_id=subject.id,
        )



    def to_model(self) -> Announcement:
        return Announcement(
            id = self.id,
            headline = self.headline,

            synopsis = self.synopsis,
            main_story = self.main_story,
            author = self.author,
            #organization_id = self.organization_id,
            state = self.state,
            slug = self.slug,
            image_url = self.image_url,
            publish_date = self.publish_date,
            modification_date = self.modification_date,
            organization = self.organization,
        )

