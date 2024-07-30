from django.urls import path
from .views import (
    AssignmentViewSet, AssignmentSingleView, NewAssignmentPostSet
)

urlpatterns = [
    path('/all-assignments-fetch/', AssignmentViewSet.as_view(), name='all-assignments-fetch'),
    path('/single-assignment-fetch/', AssignmentSingleView.as_view(), name='single-assignment-fetch'),
    path('/single-assignment-update/', AssignmentSingleView.as_view(), name='single-assignment-update'),
    path('/single-assignment-delete/', AssignmentSingleView.as_view(), name='single-assignment-delete'),
    path('/new-assignment-create/', NewAssignmentPostSet.as_view(), name='new-assignment-create'),
]
