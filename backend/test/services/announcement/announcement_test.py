"""Tests for Announcement"""

from backend.services.exceptions import (
    ResourceNotFoundException,
    UserPermissionException,
)

# PyTest
import pytest

# Tested Dependencies
from backend.models.announcement import Announcement
from backend.services.announcement import AnnouncementService

# Injected Service Fixtures
from backend.test.services.fixtures import announcement_svc_integration

# Explicitly import Data Fixture to load entities in database
from backend.test.services.core_data import setup_insert_data_fixture

# Data Models for Fake Data Inserted in Setup
from backend.test.services.announcement.announcement_test_data import (
    announcement4,
    announcements,
)
from backend.test.services.user_data import user, root


def test_get_announcements(announcement_svc_integration: AnnouncementService):
    """Test that retrieving announcements retrieves all announcements."""
    result = announcement_svc_integration.getAnnouncements(user)
    assert len(result) == len(announcements)
    assert announcements[0] in result
    assert announcements[1] in result
    assert announcements[2] in result


def test_add_announcement(announcement_svc_integration: AnnouncementService):
    """Test that adding a announcement creates and returns the correct announcement"""
    result = announcement_svc_integration.createAnnouncement(user, announcement4)
    assert result is not None
    assert announcement4.headline == result.headline
    assert announcement4.synopsis == result.synopsis
    assert announcement4.main_story == result.main_story
    assert announcement4.author == result.author
    assert announcement4.organization == result.organization
    assert announcement4.slug == result.slug
    assert announcement4.image_url == result.image_url
    assert announcement4.publish_date == result.publish_date
    assert announcement4.modification_date == result.modification_date
    assert len(announcement_svc_integration.getAnnouncements(user)) == 4


def test_add_announcement_already_exists(
    announcement_svc_integration: AnnouncementService,
):
    """Test that attempting to create two announcements with the same ID allows the create but increments the ID"""
    announcement_svc_integration.createAnnouncement(user, announcement4)
    result = announcement_svc_integration.createAnnouncement(user, announcement4)
    assert len(announcement_svc_integration.getAnnouncements(user)) == 5
    assert result.id == 5


def test_get_anouncement(announcement_svc_integration: AnnouncementService):
    """Test that get announcement by id returns the correct announcement"""
    result = announcement_svc_integration.getAnnouncement(user, 1)
    assert result is not None

    assert result.id == 1
    assert result.headline == announcements[0].headline
    assert result.synopsis == announcements[0].synopsis
    assert result.main_story == announcements[0].main_story
    assert result.author == announcements[0].author
    assert result.organization == announcements[0].organization
    assert result.slug == announcements[0].slug


def test_update_announcement(announcement_svc_integration: AnnouncementService):
    """Test that updating an announcement properly edits the fields"""
    # announcement_svc_integration.createAnnouncement(user, announcement4)
    new_annoucement = announcements[0]
    new_annoucement.headline = "Headline edit"
    new_annoucement.synopsis = "synopsis edit"
    new_annoucement.main_story = "mainstory edit"
    new_annoucement.organization = "organization edit"

    updated_announcement = announcement_svc_integration.updateAnnouncement(
        user, new_annoucement, new_annoucement.id
    )
    assert updated_announcement.headline == "Headline edit"
    assert updated_announcement.synopsis == "synopsis edit"
    assert updated_announcement.main_story == "mainstory edit"
    assert updated_announcement.organization == "organization edit"


def test_delete_announcement(announcement_svc_integration: AnnouncementService):
    """Test that deleting a announcement appropriately removes the announcement"""
    announcement_svc_integration.deleteAnnouncement(user, 1)

    result = announcement_svc_integration.getAnnouncements(user)
    assert len(announcements) - 1 == len(result)
    assert announcements[0] not in result


def test_delete_announcement_none_exists(
    announcement_svc_integration: AnnouncementService,
):
    """Test that attempting to delete a announcement that does not exist throws a ResourceNotFoundException"""
    with pytest.raises(ResourceNotFoundException):
        announcement_svc_integration.deleteAnnouncement(user, 9)
