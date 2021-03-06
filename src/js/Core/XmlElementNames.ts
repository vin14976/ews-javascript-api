/*@Updated <from SourceTree description>
 * Commit: 154dbc66ac018d861c73ce489839cd9f58a1b0cd [154dbc6]
 * Parents: 67756e1846, a9a3297c0f
 * Author: David Claux <dclaux@users.noreply.github.com>
 * Date: Friday, December 4, 2015 3:14:27 AM
 * Labels: upstream/master, origin/master, master
 * Merge pull request #71 from ysanghi/master
 * 
 * Publishing Latest Updates from Microsoft
 */
/**
 * XML element names.
 */
export module XmlElementNames {
    export var AllProperties: string = "AllProperties";
    export var ParentFolderIds: string = "ParentFolderIds";
    export var DistinguishedFolderId: string = "DistinguishedFolderId";
    export var ItemId: string = "ItemId";
    export var ItemIds: string = "ItemIds";
    export var FolderId: string = "FolderId";
    export var FolderIds: string = "FolderIds";
    export var SourceId: string = "SourceId";
    export var OccurrenceItemId: string = "OccurrenceItemId";
    export var RecurringMasterItemId: string = "RecurringMasterItemId";
    export var ItemShape: string = "ItemShape";
    export var FolderShape: string = "FolderShape";
    export var BaseShape: string = "BaseShape";
    export var IndexedPageItemView: string = "IndexedPageItemView";
    export var IndexedPageFolderView: string = "IndexedPageFolderView";
    export var FractionalPageItemView: string = "FractionalPageItemView";
    export var FractionalPageFolderView: string = "FractionalPageFolderView";
    export var SeekToConditionPageItemView: string = "SeekToConditionPageItemView";
    export var ResponseCode: string = "ResponseCode";
    export var RootFolder: string = "RootFolder";
    export var Folder: string = "Folder";
    export var ContactsFolder: string = "ContactsFolder";
    export var TasksFolder: string = "TasksFolder";
    export var SearchFolder: string = "SearchFolder";
    export var Folders: string = "Folders";
    export var Item: string = "Item";
    export var Items: string = "Items";
    export var Message: string = "Message";
    export var Mailbox: string = "Mailbox";
    export var Body: string = "Body";
    export var From: string = "From";
    export var Sender: string = "Sender";
    export var Name: string = "Name";
    export var Address: string = "Address";
    export var EmailAddress: string = "EmailAddress";
    export var RoutingType: string = "RoutingType";
    export var MailboxType: string = "MailboxType";
    export var ToRecipients: string = "ToRecipients";
    export var CcRecipients: string = "CcRecipients";
    export var BccRecipients: string = "BccRecipients";
    export var ReplyTo: string = "ReplyTo";
    export var ConversationTopic: string = "ConversationTopic";
    export var ConversationIndex: string = "ConversationIndex";
    export var IsDeliveryReceiptRequested: string = "IsDeliveryReceiptRequested";
    export var IsRead: string = "IsRead";
    export var IsReadReceiptRequested: string = "IsReadReceiptRequested";
    export var IsResponseRequested: string = "IsResponseRequested";
    export var InternetMessageId: string = "InternetMessageId";
    export var References: string = "References";
    export var ParentItemId: string = "ParentItemId";
    export var ParentFolderId: string = "ParentFolderId";
    export var ChildFolderCount: string = "ChildFolderCount";
    export var DisplayName: string = "DisplayName";
    export var TotalCount: string = "TotalCount";
    export var ItemClass: string = "ItemClass";
    export var FolderClass: string = "FolderClass";
    export var Subject: string = "Subject";
    export var MimeContent: string = "MimeContent";
    export var MimeContentUTF8: string = "MimeContentUTF8";
    export var Sensitivity: string = "Sensitivity";
    export var Attachments: string = "Attachments";
    export var DateTimeReceived: string = "DateTimeReceived";
    export var Size: string = "Size";
    export var Categories: string = "Categories";
    export var Importance: string = "Importance";
    export var InReplyTo: string = "InReplyTo";
    export var IsSubmitted: string = "IsSubmitted";
    export var IsAssociated: string = "IsAssociated";
    export var IsDraft: string = "IsDraft";
    export var IsFromMe: string = "IsFromMe";
    export var IsHidden: string = "IsHidden";
    export var IsQuickContact: string = "IsQuickContact";
    export var IsResend: string = "IsResend";
    export var IsUnmodified: string = "IsUnmodified";
    export var IsWritable: string = "IsWritable";
    export var InternetMessageHeader: string = "InternetMessageHeader";
    export var InternetMessageHeaders: string = "InternetMessageHeaders";
    export var DateTimeSent: string = "DateTimeSent";
    export var DateTimeCreated: string = "DateTimeCreated";
    export var ResponseObjects: string = "ResponseObjects";
    export var ReminderDueBy: string = "ReminderDueBy";
    export var ReminderIsSet: string = "ReminderIsSet";
    export var ReminderMinutesBeforeStart: string = "ReminderMinutesBeforeStart";
    export var DisplayCc: string = "DisplayCc";
    export var DisplayTo: string = "DisplayTo";
    export var HasAttachments: string = "HasAttachments";
    export var ExtendedProperty: string = "ExtendedProperty";
    export var Culture: string = "Culture";
    export var FileAttachment: string = "FileAttachment";
    export var ItemAttachment: string = "ItemAttachment";
    export var AttachmentIds: string = "AttachmentIds";
    export var AttachmentId: string = "AttachmentId";
    export var ContentType: string = "ContentType";
    export var ContentLocation: string = "ContentLocation";
    export var ContentId: string = "ContentId";
    export var Content: string = "Content";
    export var SavedItemFolderId: string = "SavedItemFolderId";
    export var MessageText: string = "MessageText";
    export var DescriptiveLinkKey: string = "DescriptiveLinkKey";
    export var ItemChange: string = "ItemChange";
    export var ItemChanges: string = "ItemChanges";
    export var FolderChange: string = "FolderChange";
    export var FolderChanges: string = "FolderChanges";
    export var Updates: string = "Updates";
    export var AppendToItemField: string = "AppendToItemField";
    export var SetItemField: string = "SetItemField";
    export var DeleteItemField: string = "DeleteItemField";
    export var SetFolderField: string = "SetFolderField";
    export var DeleteFolderField: string = "DeleteFolderField";
    export var FieldURI: string = "FieldURI";
    export var RootItemId: string = "RootItemId";
    export var ReferenceItemId: string = "ReferenceItemId";
    export var NewBodyContent: string = "NewBodyContent";
    export var ReplyToItem: string = "ReplyToItem";
    export var ReplyAllToItem: string = "ReplyAllToItem";
    export var ForwardItem: string = "ForwardItem";
    export var AcceptItem: string = "AcceptItem";
    export var TentativelyAcceptItem: string = "TentativelyAcceptItem";
    export var DeclineItem: string = "DeclineItem";
    export var CancelCalendarItem: string = "CancelCalendarItem";
    export var RemoveItem: string = "RemoveItem";
    export var SuppressReadReceipt: string = "SuppressReadReceipt";
    export var SuppressReadReceipts: string = "SuppressReadReceipts";
    export var String: string = "String";
    export var Start: string = "Start";
    export var End: string = "End";
    export var ProposedStart: string = "ProposedStart";
    export var ProposedEnd: string = "ProposedEnd";
    export var OriginalStart: string = "OriginalStart";
    export var IsAllDayEvent: string = "IsAllDayEvent";
    export var LegacyFreeBusyStatus: string = "LegacyFreeBusyStatus";
    export var Location: string = "Location";
    export var When: string = "When";
    export var IsMeeting: string = "IsMeeting";
    export var IsCancelled: string = "IsCancelled";
    export var IsRecurring: string = "IsRecurring";
    export var MeetingRequestWasSent: string = "MeetingRequestWasSent";
    export var CalendarItemType: string = "CalendarItemType";
    export var MyResponseType: string = "MyResponseType";
    export var Organizer: string = "Organizer";
    export var RequiredAttendees: string = "RequiredAttendees";
    export var OptionalAttendees: string = "OptionalAttendees";
    export var Resources: string = "Resources";
    export var ConflictingMeetingCount: string = "ConflictingMeetingCount";
    export var AdjacentMeetingCount: string = "AdjacentMeetingCount";
    export var ConflictingMeetings: string = "ConflictingMeetings";
    export var AdjacentMeetings: string = "AdjacentMeetings";
    export var Duration: string = "Duration";
    export var TimeZone: string = "TimeZone";
    export var AppointmentReplyTime: string = "AppointmentReplyTime";
    export var AppointmentSequenceNumber: string = "AppointmentSequenceNumber";
    export var AppointmentState: string = "AppointmentState";
    export var Recurrence: string = "Recurrence";
    export var FirstOccurrence: string = "FirstOccurrence";
    export var LastOccurrence: string = "LastOccurrence";
    export var ModifiedOccurrences: string = "ModifiedOccurrences";
    export var DeletedOccurrences: string = "DeletedOccurrences";
    export var MeetingTimeZone: string = "MeetingTimeZone";
    export var ConferenceType: string = "ConferenceType";
    export var AllowNewTimeProposal: string = "AllowNewTimeProposal";
    export var IsOnlineMeeting: string = "IsOnlineMeeting";
    export var MeetingWorkspaceUrl: string = "MeetingWorkspaceUrl";
    export var NetShowUrl: string = "NetShowUrl";
    export var JoinOnlineMeetingUrl: string = "JoinOnlineMeetingUrl";
    export var OnlineMeetingSettings: string = "OnlineMeetingSettings";
    export var LobbyBypass: string = "LobbyBypass";
    export var AccessLevel: string = "AccessLevel";
    export var Presenters: string = "Presenters";
    export var CalendarItem: string = "CalendarItem";
    export var CalendarFolder: string = "CalendarFolder";
    export var Attendee: string = "Attendee";
    export var ResponseType: string = "ResponseType";
    export var LastResponseTime: string = "LastResponseTime";
    export var Occurrence: string = "Occurrence";
    export var DeletedOccurrence: string = "DeletedOccurrence";
    export var RelativeYearlyRecurrence: string = "RelativeYearlyRecurrence";
    export var AbsoluteYearlyRecurrence: string = "AbsoluteYearlyRecurrence";
    export var RelativeMonthlyRecurrence: string = "RelativeMonthlyRecurrence";
    export var AbsoluteMonthlyRecurrence: string = "AbsoluteMonthlyRecurrence";
    export var WeeklyRecurrence: string = "WeeklyRecurrence";
    export var DailyRecurrence: string = "DailyRecurrence";
    export var DailyRegeneration: string = "DailyRegeneration";
    export var WeeklyRegeneration: string = "WeeklyRegeneration";
    export var MonthlyRegeneration: string = "MonthlyRegeneration";
    export var YearlyRegeneration: string = "YearlyRegeneration";
    export var NoEndRecurrence: string = "NoEndRecurrence";
    export var EndDateRecurrence: string = "EndDateRecurrence";
    export var NumberedRecurrence: string = "NumberedRecurrence";
    export var Interval: string = "Interval";
    export var DayOfMonth: string = "DayOfMonth";
    export var DayOfWeek: string = "DayOfWeek";
    export var DaysOfWeek: string = "DaysOfWeek";
    export var DayOfWeekIndex: string = "DayOfWeekIndex";
    export var Month: string = "Month";
    export var StartDate: string = "StartDate";
    export var EndDate: string = "EndDate";
    export var StartTime: string = "StartTime";
    export var EndTime: string = "EndTime";
    export var NumberOfOccurrences: string = "NumberOfOccurrences";
    export var AssociatedCalendarItemId: string = "AssociatedCalendarItemId";
    export var IsDelegated: string = "IsDelegated";
    export var IsOutOfDate: string = "IsOutOfDate";
    export var HasBeenProcessed: string = "HasBeenProcessed";
    export var IsOrganizer: string = "IsOrganizer";
    export var MeetingMessage: string = "MeetingMessage";
    export var FileAs: string = "FileAs";
    export var FileAsMapping: string = "FileAsMapping";
    export var GivenName: string = "GivenName";
    export var Initials: string = "Initials";
    export var MiddleName: string = "MiddleName";
    export var NickName: string = "Nickname";
    export var CompleteName: string = "CompleteName";
    export var CompanyName: string = "CompanyName";
    export var EmailAddresses: string = "EmailAddresses";
    export var PhysicalAddresses: string = "PhysicalAddresses";
    export var PhoneNumbers: string = "PhoneNumbers";
    export var PhoneNumber: string = "PhoneNumber";
    export var AssistantName: string = "AssistantName";
    export var Birthday: string = "Birthday";
    export var BusinessHomePage: string = "BusinessHomePage";
    export var Children: string = "Children";
    export var Companies: string = "Companies";
    export var ContactSource: string = "ContactSource";
    export var Department: string = "Department";
    export var Generation: string = "Generation";
    export var ImAddresses: string = "ImAddresses";
    export var ImAddress: string = "ImAddress";
    export var JobTitle: string = "JobTitle";
    export var Manager: string = "Manager";
    export var Mileage: string = "Mileage";
    export var OfficeLocation: string = "OfficeLocation";
    export var PostalAddressIndex: string = "PostalAddressIndex";
    export var Profession: string = "Profession";
    export var SpouseName: string = "SpouseName";
    export var Surname: string = "Surname";
    export var WeddingAnniversary: string = "WeddingAnniversary";
    export var HasPicture: string = "HasPicture";
    export var Title: string = "Title";
    export var FirstName: string = "FirstName";
    export var LastName: string = "LastName";
    export var Suffix: string = "Suffix";
    export var FullName: string = "FullName";
    export var YomiFirstName: string = "YomiFirstName";
    export var YomiLastName: string = "YomiLastName";
    export var Contact: string = "Contact";
    export var Entry: string = "Entry";
    export var Street: string = "Street";
    export var City: string = "City";
    export var State: string = "State";
    export var SharePointSiteUrl: string = "SharePointSiteUrl";
    export var Country: string = "Country";
    export var CountryOrRegion: string = "CountryOrRegion";
    export var PostalCode: string = "PostalCode";
    export var PostOfficeBox: string = "PostOfficeBox";
    export var Members: string = "Members";
    export var Member: string = "Member";
    export var AdditionalProperties: string = "AdditionalProperties";
    export var ExtendedFieldURI: string = "ExtendedFieldURI";
    export var Value: string = "Value";
    export var Values: string = "Values";
    export var ToFolderId: string = "ToFolderId";
    export var ActualWork: string = "ActualWork";
    export var AssignedTime: string = "AssignedTime";
    export var BillingInformation: string = "BillingInformation";
    export var ChangeCount: string = "ChangeCount";
    export var CompleteDate: string = "CompleteDate";
    export var Contacts: string = "Contacts";
    export var DelegationState: string = "DelegationState";
    export var Delegator: string = "Delegator";
    export var DueDate: string = "DueDate";
    export var IsAssignmentEditable: string = "IsAssignmentEditable";
    export var IsComplete: string = "IsComplete";
    export var IsTeamTask: string = "IsTeamTask";
    export var Owner: string = "Owner";
    export var PercentComplete: string = "PercentComplete";
    export var Status: string = "Status";
    export var StatusDescription: string = "StatusDescription";
    export var TotalWork: string = "TotalWork";
    export var Task: string = "Task";
    export var MailboxCulture: string = "MailboxCulture";
    export var MeetingRequestType: string = "MeetingRequestType";
    export var IntendedFreeBusyStatus: string = "IntendedFreeBusyStatus";
    export var MeetingRequest: string = "MeetingRequest";
    export var MeetingResponse: string = "MeetingResponse";
    export var MeetingCancellation: string = "MeetingCancellation";
    export var ChangeHighlights: string = "ChangeHighlights";
    export var HasLocationChanged: string = "HasLocationChanged";
    export var HasStartTimeChanged: string = "HasStartTimeChanged";
    export var HasEndTimeChanged: string = "HasEndTimeChanged";
    export var BaseOffset: string = "BaseOffset";
    export var Offset: string = "Offset";
    export var Standard: string = "Standard";
    export var Daylight: string = "Daylight";
    export var Time: string = "Time";
    export var AbsoluteDate: string = "AbsoluteDate";
    export var UnresolvedEntry: string = "UnresolvedEntry";
    export var ResolutionSet: string = "ResolutionSet";
    export var Resolution: string = "Resolution";
    export var DistributionList: string = "DistributionList";
    export var DLExpansion: string = "DLExpansion";
    export var IndexedFieldURI: string = "IndexedFieldURI";
    export var PullSubscriptionRequest: string = "PullSubscriptionRequest";
    export var PushSubscriptionRequest: string = "PushSubscriptionRequest";
    export var StreamingSubscriptionRequest: string = "StreamingSubscriptionRequest";
    export var EventTypes: string = "EventTypes";
    export var EventType: string = "EventType";
    export var Timeout: string = "Timeout";
    export var Watermark: string = "Watermark";
    export var SubscriptionId: string = "SubscriptionId";
    export var SubscriptionIds: string = "SubscriptionIds";
    export var StatusFrequency: string = "StatusFrequency";
    export var URL: string = "URL";
    export var CallerData: string = "CallerData";
    export var Notification: string = "Notification";
    export var Notifications: string = "Notifications";
    export var PreviousWatermark: string = "PreviousWatermark";
    export var MoreEvents: string = "MoreEvents";
    export var TimeStamp: string = "TimeStamp";
    export var UnreadCount: string = "UnreadCount";
    export var OldParentFolderId: string = "OldParentFolderId";
    export var CopiedEvent: string = "CopiedEvent";
    export var CreatedEvent: string = "CreatedEvent";
    export var DeletedEvent: string = "DeletedEvent";
    export var ModifiedEvent: string = "ModifiedEvent";
    export var MovedEvent: string = "MovedEvent";
    export var NewMailEvent: string = "NewMailEvent";
    export var StatusEvent: string = "StatusEvent";
    export var FreeBusyChangedEvent: string = "FreeBusyChangedEvent";
    export var ExchangeImpersonation: string = "ExchangeImpersonation";
    export var ConnectingSID: string = "ConnectingSID";
    export var OpenAsAdminOrSystemService: string = "OpenAsAdminOrSystemService";
    export var LogonType: string = "LogonType";
    export var BudgetType: string = "BudgetType";
    export var ManagementRole: string = "ManagementRole";
    export var UserRoles: string = "UserRoles";
    export var ApplicationRoles: string = "ApplicationRoles";
    export var Role: string = "Role";
    export var SyncFolderId: string = "SyncFolderId";
    export var SyncScope: string = "SyncScope";
    export var SyncState: string = "SyncState";
    export var Ignore: string = "Ignore";
    export var MaxChangesReturned: string = "MaxChangesReturned";
    export var Changes: string = "Changes";
    export var IncludesLastItemInRange: string = "IncludesLastItemInRange";
    export var IncludesLastFolderInRange: string = "IncludesLastFolderInRange";
    export var Create: string = "Create";
    export var Update: string = "Update";
    export var Delete: string = "Delete";
    export var ReadFlagChange: string = "ReadFlagChange";
    export var SearchParameters: string = "SearchParameters";
    export var SoftDeleted: string = "SoftDeleted";
    export var Shallow: string = "Shallow";
    export var Associated: string = "Associated";
    export var BaseFolderId: string = "BaseFolderId";
    export var BaseFolderIds: string = "BaseFolderIds";
    export var SortOrder: string = "SortOrder";
    export var FieldOrder: string = "FieldOrder";
    export var CanDelete: string = "CanDelete";
    export var CanRenameOrMove: string = "CanRenameOrMove";
    export var MustDisplayComment: string = "MustDisplayComment";
    export var HasQuota: string = "HasQuota";
    export var IsManagedFoldersRoot: string = "IsManagedFoldersRoot";
    export var ManagedFolderId: string = "ManagedFolderId";
    export var Comment: string = "Comment";
    export var StorageQuota: string = "StorageQuota";
    export var FolderSize: string = "FolderSize";
    export var HomePage: string = "HomePage";
    export var ManagedFolderInformation: string = "ManagedFolderInformation";
    export var CalendarView: string = "CalendarView";
    export var PostedTime: string = "PostedTime";
    export var PostItem: string = "PostItem";
    export var RequestServerVersion: string = "RequestServerVersion";
    export var PostReplyItem: string = "PostReplyItem";
    export var CreateAssociated: string = "CreateAssociated";
    export var CreateContents: string = "CreateContents";
    export var CreateHierarchy: string = "CreateHierarchy";
    export var Modify: string = "Modify";
    export var Read: string = "Read";
    export var EffectiveRights: string = "EffectiveRights";
    export var LastModifiedName: string = "LastModifiedName";
    export var LastModifiedTime: string = "LastModifiedTime";
    export var ConversationId: string = "ConversationId";
    export var UniqueBody: string = "UniqueBody";
    export var BodyType: string = "BodyType";
    export var NormalizedBodyType: string = "NormalizedBodyType";
    export var UniqueBodyType: string = "UniqueBodyType";
    export var AttachmentShape: string = "AttachmentShape";
    export var UserId: string = "UserId";
    export var UserIds: string = "UserIds";
    export var CanCreateItems: string = "CanCreateItems";
    export var CanCreateSubFolders: string = "CanCreateSubFolders";
    export var IsFolderOwner: string = "IsFolderOwner";
    export var IsFolderVisible: string = "IsFolderVisible";
    export var IsFolderContact: string = "IsFolderContact";
    export var EditItems: string = "EditItems";
    export var DeleteItems: string = "DeleteItems";
    export var ReadItems: string = "ReadItems";
    export var PermissionLevel: string = "PermissionLevel";
    export var CalendarPermissionLevel: string = "CalendarPermissionLevel";
    export var SID: string = "SID";
    export var PrimarySmtpAddress: string = "PrimarySmtpAddress";
    export var DistinguishedUser: string = "DistinguishedUser";
    export var PermissionSet: string = "PermissionSet";
    export var Permissions: string = "Permissions";
    export var Permission: string = "Permission";
    export var CalendarPermissions: string = "CalendarPermissions";
    export var CalendarPermission: string = "CalendarPermission";
    export var GroupBy: string = "GroupBy";
    export var AggregateOn: string = "AggregateOn";
    export var Groups: string = "Groups";
    export var GroupedItems: string = "GroupedItems";
    export var GroupIndex: string = "GroupIndex";
    export var ConflictResults: string = "ConflictResults";
    export var Count: string = "Count";
    export var OofSettings: string = "OofSettings";
    export var UserOofSettings: string = "UserOofSettings";
    export var OofState: string = "OofState";
    export var ExternalAudience: string = "ExternalAudience";
    export var AllowExternalOof: string = "AllowExternalOof";
    export var InternalReply: string = "InternalReply";
    export var ExternalReply: string = "ExternalReply";
    export var Bias: string = "Bias";
    export var DayOrder: string = "DayOrder";
    export var Year: string = "Year";
    export var StandardTime: string = "StandardTime";
    export var DaylightTime: string = "DaylightTime";
    export var MailboxData: string = "MailboxData";
    export var MailboxDataArray: string = "MailboxDataArray";
    export var Email: string = "Email";
    export var AttendeeType: string = "AttendeeType";
    export var ExcludeConflicts: string = "ExcludeConflicts";
    export var FreeBusyViewOptions: string = "FreeBusyViewOptions";
    export var SuggestionsViewOptions: string = "SuggestionsViewOptions";
    export var FreeBusyView: string = "FreeBusyView";
    export var TimeWindow: string = "TimeWindow";
    export var MergedFreeBusyIntervalInMinutes: string = "MergedFreeBusyIntervalInMinutes";
    export var RequestedView: string = "RequestedView";
    export var FreeBusyViewType: string = "FreeBusyViewType";
    export var CalendarEventArray: string = "CalendarEventArray";
    export var CalendarEvent: string = "CalendarEvent";
    export var BusyType: string = "BusyType";
    export var MergedFreeBusy: string = "MergedFreeBusy";
    export var WorkingHours: string = "WorkingHours";
    export var WorkingPeriodArray: string = "WorkingPeriodArray";
    export var WorkingPeriod: string = "WorkingPeriod";
    export var StartTimeInMinutes: string = "StartTimeInMinutes";
    export var EndTimeInMinutes: string = "EndTimeInMinutes";
    export var GoodThreshold: string = "GoodThreshold";
    export var MaximumResultsByDay: string = "MaximumResultsByDay";
    export var MaximumNonWorkHourResultsByDay: string = "MaximumNonWorkHourResultsByDay";
    export var MeetingDurationInMinutes: string = "MeetingDurationInMinutes";
    export var MinimumSuggestionQuality: string = "MinimumSuggestionQuality";
    export var DetailedSuggestionsWindow: string = "DetailedSuggestionsWindow";
    export var CurrentMeetingTime: string = "CurrentMeetingTime";
    export var GlobalObjectId: string = "GlobalObjectId";
    export var SuggestionDayResultArray: string = "SuggestionDayResultArray";
    export var SuggestionDayResult: string = "SuggestionDayResult";
    export var Date: string = "Date";
    export var DayQuality: string = "DayQuality";
    export var SuggestionArray: string = "SuggestionArray";
    export var Suggestion: string = "Suggestion";
    export var MeetingTime: string = "MeetingTime";
    export var IsWorkTime: string = "IsWorkTime";
    export var SuggestionQuality: string = "SuggestionQuality";
    export var AttendeeConflictDataArray: string = "AttendeeConflictDataArray";
    export var UnknownAttendeeConflictData: string = "UnknownAttendeeConflictData";
    export var TooBigGroupAttendeeConflictData: string = "TooBigGroupAttendeeConflictData";
    export var IndividualAttendeeConflictData: string = "IndividualAttendeeConflictData";
    export var GroupAttendeeConflictData: string = "GroupAttendeeConflictData";
    export var NumberOfMembers: string = "NumberOfMembers";
    export var NumberOfMembersAvailable: string = "NumberOfMembersAvailable";
    export var NumberOfMembersWithConflict: string = "NumberOfMembersWithConflict";
    export var NumberOfMembersWithNoData: string = "NumberOfMembersWithNoData";
    export var SourceIds: string = "SourceIds";
    export var AlternateId: string = "AlternateId";
    export var AlternatePublicFolderId: string = "AlternatePublicFolderId";
    export var AlternatePublicFolderItemId: string = "AlternatePublicFolderItemId";
    export var DelegatePermissions: string = "DelegatePermissions";
    export var ReceiveCopiesOfMeetingMessages: string = "ReceiveCopiesOfMeetingMessages";
    export var ViewPrivateItems: string = "ViewPrivateItems";
    export var CalendarFolderPermissionLevel: string = "CalendarFolderPermissionLevel";
    export var TasksFolderPermissionLevel: string = "TasksFolderPermissionLevel";
    export var InboxFolderPermissionLevel: string = "InboxFolderPermissionLevel";
    export var ContactsFolderPermissionLevel: string = "ContactsFolderPermissionLevel";
    export var NotesFolderPermissionLevel: string = "NotesFolderPermissionLevel";
    export var JournalFolderPermissionLevel: string = "JournalFolderPermissionLevel";
    export var DelegateUser: string = "DelegateUser";
    export var DelegateUsers: string = "DelegateUsers";
    export var DeliverMeetingRequests: string = "DeliverMeetingRequests";
    export var MessageXml: string = "MessageXml";
    export var UserConfiguration: string = "UserConfiguration";
    export var UserConfigurationName: string = "UserConfigurationName";
    export var UserConfigurationProperties: string = "UserConfigurationProperties";
    export var Dictionary: string = "Dictionary";
    export var DictionaryEntry: string = "DictionaryEntry";
    export var DictionaryKey: string = "DictionaryKey";
    export var DictionaryValue: string = "DictionaryValue";
    export var XmlData: string = "XmlData";
    export var BinaryData: string = "BinaryData";
    export var FilterHtmlContent: string = "FilterHtmlContent";
    export var ConvertHtmlCodePageToUTF8: string = "ConvertHtmlCodePageToUTF8";
    export var UnknownEntries: string = "UnknownEntries";
    export var UnknownEntry: string = "UnknownEntry";
    export var PasswordExpirationDate: string = "PasswordExpirationDate";
    export var Flag: string = "Flag";
    export var PersonaPostalAddress: string = "PostalAddress";
    export var PostalAddressType: string = "Type";
    export var EnhancedLocation: string = "EnhancedLocation";
    export var LocationDisplayName: string = "DisplayName";
    export var LocationAnnotation: string = "Annotation";
    export var LocationSource: string = "LocationSource";
    export var LocationUri: string = "LocationUri";
    export var Latitude: string = "Latitude";
    export var Longitude: string = "Longitude";
    export var Accuracy: string = "Accuracy";
    export var Altitude: string = "Altitude";
    export var AltitudeAccuracy: string = "AltitudeAccuracy";
    export var FormattedAddress: string = "FormattedAddress";
    export var Guid: string = "Guid";
    export var PhoneCallId: string = "PhoneCallId";
    export var DialString: string = "DialString";
    export var PhoneCallInformation: string = "PhoneCallInformation";
    export var PhoneCallState: string = "PhoneCallState";
    export var ConnectionFailureCause: string = "ConnectionFailureCause";
    export var SIPResponseCode: string = "SIPResponseCode";
    export var SIPResponseText: string = "SIPResponseText";
    export var WebClientReadFormQueryString: string = "WebClientReadFormQueryString";
    export var WebClientEditFormQueryString: string = "WebClientEditFormQueryString";
    export var Ids: string = "Ids";
    export var Id: string = "Id";
    export var TimeZoneDefinitions: string = "TimeZoneDefinitions";
    export var TimeZoneDefinition: string = "TimeZoneDefinition";
    export var Periods: string = "Periods";
    export var Period: string = "Period";
    export var TransitionsGroups: string = "TransitionsGroups";
    export var TransitionsGroup: string = "TransitionsGroup";
    export var Transitions: string = "Transitions";
    export var Transition: string = "Transition";
    export var AbsoluteDateTransition: string = "AbsoluteDateTransition";
    export var RecurringDayTransition: string = "RecurringDayTransition";
    export var RecurringDateTransition: string = "RecurringDateTransition";
    export var DateTime: string = "DateTime";
    export var TimeOffset: string = "TimeOffset";
    export var Day: string = "Day";
    export var TimeZoneContext: string = "TimeZoneContext";
    export var StartTimeZone: string = "StartTimeZone";
    export var EndTimeZone: string = "EndTimeZone";
    export var ReceivedBy: string = "ReceivedBy";
    export var ReceivedRepresenting: string = "ReceivedRepresenting";
    export var Uid: string = "UID";
    export var RecurrenceId: string = "RecurrenceId";
    export var DateTimeStamp: string = "DateTimeStamp";
    export var IsInline: string = "IsInline";
    export var IsContactPhoto: string = "IsContactPhoto";
    export var QueryString: string = "QueryString";
    export var HighlightTerms: string = "HighlightTerms";
    export var HighlightTerm: string = "Term";
    export var HighlightTermScope: string = "Scope";
    export var HighlightTermValue: string = "Value";
    export var CalendarEventDetails: string = "CalendarEventDetails";
    export var ID: string = "ID";
    export var IsException: string = "IsException";
    export var IsReminderSet: string = "IsReminderSet";
    export var IsPrivate: string = "IsPrivate";
    export var FirstDayOfWeek: string = "FirstDayOfWeek";
    export var Verb: string = "Verb";
    export var Parameter: string = "Parameter";
    export var ReturnValue: string = "ReturnValue";
    export var ReturnNewItemIds: string = "ReturnNewItemIds";
    export var DateTimePrecision: string = "DateTimePrecision";
    export var ConvertInlineImagesToDataUrls: string = "ConvertInlineImagesToDataUrls";
    export var InlineImageUrlTemplate: string = "InlineImageUrlTemplate";
    export var BlockExternalImages: string = "BlockExternalImages";
    export var AddBlankTargetToLinks: string = "AddBlankTargetToLinks";
    export var MaximumBodySize: string = "MaximumBodySize";
    export var StoreEntryId: string = "StoreEntryId";
    export var InstanceKey: string = "InstanceKey";
    export var NormalizedBody: string = "NormalizedBody";
    export var PolicyTag: string = "PolicyTag";
    export var ArchiveTag: string = "ArchiveTag";
    export var RetentionDate: string = "RetentionDate";
    export var DisableReason: string = "DisableReason";
    export var AppMarketplaceUrl: string = "AppMarketplaceUrl";
    export var TextBody: string = "TextBody";
    export var IconIndex: string = "IconIndex";
    export var GlobalIconIndex: string = "GlobalIconIndex";
    export var DraftItemIds: string = "DraftItemIds";
    export var HasIrm: string = "HasIrm";
    export var GlobalHasIrm: string = "GlobalHasIrm";
    export var ApprovalRequestData: string = "ApprovalRequestData";
    export var IsUndecidedApprovalRequest: string = "IsUndecidedApprovalRequest";
    export var ApprovalDecision: string = "ApprovalDecision";
    export var ApprovalDecisionMaker: string = "ApprovalDecisionMaker";
    export var ApprovalDecisionTime: string = "ApprovalDecisionTime";
    export var VotingOptionData: string = "VotingOptionData";
    export var VotingOptionDisplayName: string = "DisplayName";
    export var SendPrompt: string = "SendPrompt";
    export var VotingInformation: string = "VotingInformation";
    export var UserOptions: string = "UserOptions";
    export var VotingResponse: string = "VotingResponse";
    export var NumberOfDays: string = "NumberOfDays";
    export var AcceptanceState: string = "AcceptanceState";

    export var NlgEntityExtractionResult: string = "EntityExtractionResult";
    export var NlgAddresses: string = "Addresses";
    export var NlgAddress: string = "Address";
    export var NlgMeetingSuggestions: string = "MeetingSuggestions";
    export var NlgMeetingSuggestion: string = "MeetingSuggestion";
    export var NlgTaskSuggestions: string = "TaskSuggestions";
    export var NlgTaskSuggestion: string = "TaskSuggestion";
    export var NlgBusinessName: string = "BusinessName";
    export var NlgPeopleName: string = "PeopleName";
    export var NlgEmailAddresses: string = "EmailAddresses";
    export var NlgEmailAddress: string = "EmailAddress";
    export var NlgEmailPosition: string = "Position";
    export var NlgContacts: string = "Contacts";
    export var NlgContact: string = "Contact";
    export var NlgContactString: string = "ContactString";
    export var NlgUrls: string = "Urls";
    export var NlgUrl: string = "Url";
    export var NlgPhoneNumbers: string = "PhoneNumbers";
    export var NlgPhone: string = "Phone";
    export var NlgAttendees: string = "Attendees";
    export var NlgEmailUser: string = "EmailUser";
    export var NlgLocation: string = "Location";
    export var NlgSubject: string = "Subject";
    export var NlgMeetingString: string = "MeetingString";
    export var NlgStartTime: string = "StartTime";
    export var NlgEndTime: string = "EndTime";
    export var NlgTaskString: string = "TaskString";
    export var NlgAssignees: string = "Assignees";
    export var NlgPersonName: string = "PersonName";
    export var NlgOriginalPhoneString: string = "OriginalPhoneString";
    export var NlgPhoneString: string = "PhoneString";
    export var NlgType: string = "Type";
    export var NlgName: string = "Name";
    export var NlgUserId: string = "UserId";

    export var GetClientAccessToken: string = "GetClientAccessToken";
    export var GetClientAccessTokenResponse: string = "GetClientAccessTokenResponse";
    export var GetClientAccessTokenResponseMessage: string = "GetClientAccessTokenResponseMessage";
    export var TokenRequests: string = "TokenRequests";
    export var TokenRequest: string = "TokenRequest";
    export var TokenType: string = "TokenType";
    export var TokenValue: string = "TokenValue";
    export var TTL: string = "TTL";
    export var Tokens: string = "Tokens";

    export var MarkAsJunk: string = "MarkAsJunk";
    export var MarkAsJunkResponse: string = "MarkAsJunkResponse";
    export var MarkAsJunkResponseMessage: string = "MarkAsJunkResponseMessage";
    export var MovedItemId: string = "MovedItemId";

    /* #region Persona */

    export var CreationTime: string = "CreationTime";
    export var People: string = "People";
    export var Persona: string = "Persona";
    export var PersonaId: string = "PersonaId";
    export var PersonaShape: string = "PersonaShape";
    export var RelevanceScore: string = "RelevanceScore";
    export var TotalNumberOfPeopleInView: string = "TotalNumberOfPeopleInView";
    export var FirstMatchingRowIndex: string = "FirstMatchingRowIndex";
    export var FirstLoadedRowIndex: string = "FirstLoadedRowIndex";
    export var YomiCompanyName: string = "YomiCompanyName";
    export var Emails1: string = "Emails1";
    export var Emails2: string = "Emails2";
    export var Emails3: string = "Emails3";
    export var HomeAddresses: string = "HomeAddresses";
    export var BusinessAddresses: string = "BusinessAddresses";
    export var OtherAddresses: string = "OtherAddresses";
    export var BusinessPhoneNumbers: string = "BusinessPhoneNumbers";
    export var BusinessPhoneNumbers2: string = "BusinessPhoneNumbers2";
    export var AssistantPhoneNumbers: string = "AssistantPhoneNumbers";
    export var TTYTDDPhoneNumbers: string = "TTYTDDPhoneNumbers";
    export var HomePhones: string = "HomePhones";
    export var HomePhones2: string = "HomePhones2";
    export var MobilePhones: string = "MobilePhones";
    export var MobilePhones2: string = "MobilePhones2";
    export var CallbackPhones: string = "CallbackPhones";
    export var CarPhones: string = "CarPhones";
    export var HomeFaxes: string = "HomeFaxes";
    export var OrganizationMainPhones: string = "OrganizationMainPhones";
    export var OtherFaxes: string = "OtherFaxes";
    export var OtherTelephones: string = "OtherTelephones";
    export var OtherPhones2: string = "OtherPhones2";
    export var Pagers: string = "Pagers";
    export var RadioPhones: string = "RadioPhones";
    export var TelexNumbers: string = "TelexNumbers";
    export var WorkFaxes: string = "WorkFaxes";
    export var FileAses: string = "FileAses";
    export var CompanyNames: string = "CompanyNames";
    export var DisplayNames: string = "DisplayNames";
    export var DisplayNamePrefixes: string = "DisplayNamePrefixes";
    export var GivenNames: string = "GivenNames";
    export var MiddleNames: string = "MiddleNames";
    export var Surnames: string = "Surnames";
    export var Generations: string = "Generations";
    export var Nicknames: string = "Nicknames";
    export var YomiCompanyNames: string = "YomiCompanyNames";
    export var YomiFirstNames: string = "YomiFirstNames";
    export var YomiLastNames: string = "YomiLastNames";
    export var Managers: string = "Managers";
    export var AssistantNames: string = "AssistantNames";
    export var Professions: string = "Professions";
    export var SpouseNames: string = "SpouseNames";
    export var Departments: string = "Departments";
    export var Titles: string = "Titles";
    export var ImAddresses2: string = "ImAddresses2";
    export var ImAddresses3: string = "ImAddresses3";
    export var DisplayNamePrefix: string = "DisplayNamePrefix";
    export var DisplayNameFirstLast: string = "DisplayNameFirstLast";
    export var DisplayNameLastFirst: string = "DisplayNameLastFirst";
    export var DisplayNameFirstLastHeader: string = "DisplayNameFirstLastHeader";
    export var DisplayNameLastFirstHeader: string = "DisplayNameLastFirstHeader";
    export var IsFavorite: string = "IsFavorite";
    export var Schools: string = "Schools";
    export var Hobbies: string = "Hobbies";
    export var Locations: string = "Locations";
    export var OfficeLocations: string = "OfficeLocations";
    export var BusinessHomePages: string = "BusinessHomePages";
    export var PersonalHomePages: string = "PersonalHomePages";
    export var ThirdPartyPhotoUrls: string = "ThirdPartyPhotoUrls";
    export var Attribution: string = "Attribution";
    export var Attributions: string = "Attributions";
    export var StringAttributedValue: string = "StringAttributedValue";
    export var DisplayNameFirstLastSortKey: string = "DisplayNameFirstLastSortKey";
    export var DisplayNameLastFirstSortKey: string = "DisplayNameLastFirstSortKey";
    export var CompanyNameSortKey: string = "CompanyNameSortKey";
    export var HomeCitySortKey: string = "HomeCitySortKey";
    export var WorkCitySortKey: string = "WorkCitySortKey";
    export var FileAsId: string = "FileAsId";
    export var FileAsIds: string = "FileAsIds";
    export var HomeCity: string = "HomeCity";
    export var WorkCity: string = "WorkCity";
    export var PersonaType: string = "PersonaType";
    export var Birthdays: string = "Birthdays";
    export var BirthdaysLocal: string = "BirthdaysLocal";
    export var WeddingAnniversaries: string = "WeddingAnniversaries";
    export var WeddingAnniversariesLocal: string = "WeddingAnniversariesLocal";
    export var OriginalDisplayName: string = "OriginalDisplayName";

    /* #endregion */

    /* #region People Insights */
    export var Person: string = "Person";
    export var Insights: string = "Insights";
    export var Insight: string = "Insight";
    export var InsightGroupType: string = "InsightGroupType";
    export var InsightType: string = "InsightType";
    export var InsightSourceType: string = "InsightSourceType";
    export var InsightValue: string = "InsightValue";
    export var InsightSource: string = "InsightSource";
    export var UpdatedUtcTicks: string = "UpdatedUtcTicks";
    export var StringInsightValue: string = "StringInsightValue";
    export var ProfileInsightValue: string = "ProfileInsightValue";
    export var JobInsightValue: string = "JobInsightValue";
    export var UserProfilePicture: string = "UserProfilePicture";
    export var EducationInsightValue: string = "EducationInsightValue";
    export var SkillInsightValue: string = "SkillInsightValue";
    export var DelveDoc: string = "DelveDoc";
    export var CompanyInsightValue: string = "CompanyInsightValue";
    export var ArrayOfInsightValue: string = "ArrayOfInsightValue";
    export var InsightContent: string = "InsightContent";
    export var SingleValueInsightContent: string = "SingleValueInsightContent";
    export var MultiValueInsightContent: string = "MultiValueInsightContent";
    export var ArrayOfInsight: string = "ArrayOfInsight";
    export var PersonType: string = "PersonType";
    export var SatoriId: string = "SatoriId";
    export var DescriptionAttribution: string = "DescriptionAttribution";
    export var ImageUrl: string = "ImageUrl";
    export var ImageUrlAttribution: string = "ImageUrlAttribution";
    export var YearFound: string = "YearFound";
    export var FinanceSymbol: string = "FinanceSymbol";
    export var WebsiteUrl: string = "WebsiteUrl";
    export var Rank: string = "Rank";
    export var Author: string = "Author";
    export var Created: string = "Created";
    export var DefaultEncodingURL: string = "DefaultEncodingURL";
    export var FileType: string = "FileType";
    export var Data: string = "Data";
    export var ItemList: string = "ItemList";
    export var Avatar: string = "Avatar";
    export var JoinedUtcTicks: string = "JoinedUtcTicks";
    export var Company: string = "Company";
    export var StartUtcTicks: string = "StartUtcTicks";
    export var EndUtcTicks: string = "EndUtcTicks";
    export var Blob: string = "Blob";
    export var PhotoSize: string = "PhotoSize";
    export var Institute: string = "Institute";
    export var Degree: string = "Degree";
    export var Strength: string = "Strength";
        
    /* #endregion */

    /* #region Conversations */

    export var Conversations: string = "Conversations";
    export var Conversation: string = "Conversation";
    export var UniqueRecipients: string = "UniqueRecipients";
    export var GlobalUniqueRecipients: string = "GlobalUniqueRecipients";
    export var UniqueUnreadSenders: string = "UniqueUnreadSenders";
    export var GlobalUniqueUnreadSenders: string = "GlobalUniqueUnreadSenders";
    export var UniqueSenders: string = "UniqueSenders";
    export var GlobalUniqueSenders: string = "GlobalUniqueSenders";
    export var LastDeliveryTime: string = "LastDeliveryTime";
    export var GlobalLastDeliveryTime: string = "GlobalLastDeliveryTime";
    export var GlobalCategories: string = "GlobalCategories";
    export var FlagStatus: string = "FlagStatus";
    export var GlobalFlagStatus: string = "GlobalFlagStatus";
    export var GlobalHasAttachments: string = "GlobalHasAttachments";
    export var MessageCount: string = "MessageCount";
    export var GlobalMessageCount: string = "GlobalMessageCount";
    export var GlobalUnreadCount: string = "GlobalUnreadCount";
    export var GlobalSize: string = "GlobalSize";
    export var ItemClasses: string = "ItemClasses";
    export var GlobalItemClasses: string = "GlobalItemClasses";
    export var GlobalImportance: string = "GlobalImportance";
    export var GlobalInferredImportance: string = "GlobalInferredImportance";
    export var GlobalItemIds: string = "GlobalItemIds";
    export var ChangeType: string = "ChangeType";
    export var ReadFlag: string = "ReadFlag";
    export var TotalConversationsInView: string = "TotalConversationsInView";
    export var IndexedOffset: string = "IndexedOffset";
    export var ConversationShape: string = "ConversationShape";
    export var MailboxScope: string = "MailboxScope";

    // ApplyConversationAction
    export var ApplyConversationAction: string = "ApplyConversationAction";
    export var ConversationActions: string = "ConversationActions";
    export var ConversationAction: string = "ConversationAction";
    export var ApplyConversationActionResponse: string = "ApplyConversationActionResponse";
    export var ApplyConversationActionResponseMessage: string = "ApplyConversationActionResponseMessage";
    export var EnableAlwaysDelete: string = "EnableAlwaysDelete";
    export var ProcessRightAway: string = "ProcessRightAway";
    export var DestinationFolderId: string = "DestinationFolderId";
    export var ContextFolderId: string = "ContextFolderId";
    export var ConversationLastSyncTime: string = "ConversationLastSyncTime";
    export var AlwaysCategorize: string = "AlwaysCategorize";
    export var AlwaysDelete: string = "AlwaysDelete";
    export var AlwaysMove: string = "AlwaysMove";
    export var Move: string = "Move";
    export var Copy: string = "Copy";
    export var SetReadState: string = "SetReadState";
    export var SetRetentionPolicy: string = "SetRetentionPolicy";
    export var DeleteType: string = "DeleteType";
    export var RetentionPolicyType: string = "RetentionPolicyType";
    export var RetentionPolicyTagId: string = "RetentionPolicyTagId";

    // GetConversationItems
    export var FoldersToIgnore: string = "FoldersToIgnore";
    export var ParentInternetMessageId: string = "ParentInternetMessageId";
    export var ConversationNode: string = "ConversationNode";
    export var ConversationNodes: string = "ConversationNodes";
    export var MaxItemsToReturn: string = "MaxItemsToReturn";

    /* #endregion */

    /* #region TeamMailbox */

    export var SetTeamMailbox: string = "SetTeamMailbox";
    export var SetTeamMailboxResponse: string = "SetTeamMailboxResponse";
    export var UnpinTeamMailbox: string = "UnpinTeamMailbox";
    export var UnpinTeamMailboxResponse: string = "UnpinTeamMailboxResponse";

    /* #endregion */

    /* #region RoomList & Room */

    export var RoomLists: string = "RoomLists";
    export var Rooms: string = "Rooms";
    export var Room: string = "Room";
    export var RoomList: string = "RoomList";
    export var RoomId: string = "Id";

    /* #endregion */

    /* #region Autodiscover */

    export var Autodiscover: string = "Autodiscover";
    export var BinarySecret: string = "BinarySecret";
    export var Response: string = "Response";
    export var User: string = "User";
    export var LegacyDN: string = "LegacyDN";
    export var DeploymentId: string = "DeploymentId";
    export var Account: string = "Account";
    export var AccountType: string = "AccountType";
    export var Action: string = "Action";
    export var To: string = "To";
    export var RedirectAddr: string = "RedirectAddr";
    export var RedirectUrl: string = "RedirectUrl";
    export var Protocol: string = "Protocol";
    export var Type: string = "Type";
    export var Server: string = "Server";
    export var OwnerSmtpAddress: string = "OwnerSmtpAddress";
    export var ServerDN: string = "ServerDN";
    export var ServerVersion: string = "ServerVersion";
    export var ServerVersionInfo: string = "ServerVersionInfo";
    export var AD: string = "AD";
    export var AuthPackage: string = "AuthPackage";
    export var MdbDN: string = "MdbDN";
    export var EWSUrl: string = "EwsUrl"; // Server side emits "Ews", not "EWS".
    export var EwsPartnerUrl: string = "EwsPartnerUrl";
    export var EmwsUrl: string = "EmwsUrl";
    export var ASUrl: string = "ASUrl";
    export var OOFUrl: string = "OOFUrl";
    export var UMUrl: string = "UMUrl";
    export var OABUrl: string = "OABUrl";
    export var Internal: string = "Internal";
    export var External: string = "External";
    export var OWAUrl: string = "OWAUrl";
    export var Error: string = "Error";
    export var ErrorCode: string = "ErrorCode";
    export var DebugData: string = "DebugData";
    export var Users: string = "Users";
    export var RequestedSettings: string = "RequestedSettings";
    export var Setting: string = "Setting";
    export var GetUserSettingsRequestMessage: string = "GetUserSettingsRequestMessage";
    export var RequestedServerVersion: string = "RequestedServerVersion";
    export var Request: string = "Request";
    export var RedirectTarget: string = "RedirectTarget";
    export var UserSettings: string = "UserSettings";
    export var UserSettingErrors: string = "UserSettingErrors";
    export var GetUserSettingsResponseMessage: string = "GetUserSettingsResponseMessage";
    export var ErrorMessage: string = "ErrorMessage";
    export var UserResponse: string = "UserResponse";
    export var UserResponses: string = "UserResponses";
    export var UserSettingError: string = "UserSettingError";
    export var Domain: string = "Domain";
    export var Domains: string = "Domains";
    export var DomainResponse: string = "DomainResponse";
    export var DomainResponses: string = "DomainResponses";
    export var DomainSetting: string = "DomainSetting";
    export var DomainSettings: string = "DomainSettings";
    export var DomainStringSetting: string = "DomainStringSetting";
    export var DomainSettingError: string = "DomainSettingError";
    export var DomainSettingErrors: string = "DomainSettingErrors";
    export var GetDomainSettingsRequestMessage: string = "GetDomainSettingsRequestMessage";
    export var GetDomainSettingsResponseMessage: string = "GetDomainSettingsResponseMessage";
    export var SettingName: string = "SettingName";
    export var UserSetting: string = "UserSetting";
    export var StringSetting: string = "StringSetting";
    export var WebClientUrlCollectionSetting: string = "WebClientUrlCollectionSetting";
    export var WebClientUrls: string = "WebClientUrls";
    export var WebClientUrl: string = "WebClientUrl";
    export var AuthenticationMethods: string = "AuthenticationMethods";
    export var Url: string = "Url";
    export var AlternateMailboxCollectionSetting: string = "AlternateMailboxCollectionSetting";
    export var AlternateMailboxes: string = "AlternateMailboxes";
    export var AlternateMailbox: string = "AlternateMailbox";
    export var ProtocolConnectionCollectionSetting: string = "ProtocolConnectionCollectionSetting";
    export var ProtocolConnections: string = "ProtocolConnections";
    export var ProtocolConnection: string = "ProtocolConnection";
    export var DocumentSharingLocationCollectionSetting: string = "DocumentSharingLocationCollectionSetting";
    export var DocumentSharingLocations: string = "DocumentSharingLocations";
    export var DocumentSharingLocation: string = "DocumentSharingLocation";
    export var ServiceUrl: string = "ServiceUrl";
    export var LocationUrl: string = "LocationUrl";
    export var SupportedFileExtensions: string = "SupportedFileExtensions";
    export var FileExtension: string = "FileExtension";
    export var ExternalAccessAllowed: string = "ExternalAccessAllowed";
    export var AnonymousAccessAllowed: string = "AnonymousAccessAllowed";
    export var CanModifyPermissions: string = "CanModifyPermissions";
    export var IsDefault: string = "IsDefault";
    export var EncryptionMethod: string = "EncryptionMethod";
    export var Hostname: string = "Hostname";
    export var Port: string = "Port";
    export var Version: string = "Version";
    export var MajorVersion: string = "MajorVersion";
    export var MinorVersion: string = "MinorVersion";
    export var MajorBuildNumber: string = "MajorBuildNumber";
    export var MinorBuildNumber: string = "MinorBuildNumber";
    export var RequestedVersion: string = "RequestedVersion";
    export var PublicFolderServer: string = "PublicFolderServer";
    export var Ssl: string = "SSL";
    export var SharingUrl: string = "SharingUrl";
    export var EcpUrl: string = "EcpUrl";
    export var EcpUrl_um: string = "EcpUrl-um";
    export var EcpUrl_aggr: string = "EcpUrl-aggr";
    export var EcpUrl_sms: string = "EcpUrl-sms";
    export var EcpUrl_mt: string = "EcpUrl-mt";
    export var EcpUrl_ret: string = "EcpUrl-ret";
    export var EcpUrl_publish: string = "EcpUrl-publish";
    export var EcpUrl_photo: string = "EcpUrl-photo";
    export var ExchangeRpcUrl: string = "ExchangeRpcUrl";
    export var EcpUrl_connect: string = "EcpUrl-connect";
    export var EcpUrl_tm: string = "EcpUrl-tm";
    export var EcpUrl_tmCreating: string = "EcpUrl-tmCreating";
    export var EcpUrl_tmEditing: string = "EcpUrl-tmEditing";
    export var EcpUrl_tmHiding: string = "EcpUrl-tmHiding";
    export var SiteMailboxCreationURL: string = "SiteMailboxCreationURL";
    export var EcpUrl_extinstall: string = "EcpUrl-extinstall";
    export var PartnerToken: string = "PartnerToken";
    export var PartnerTokenReference: string = "PartnerTokenReference";
    export var ServerExclusiveConnect: string = "ServerExclusiveConnect";
    export var AutoDiscoverSMTPAddress: string = "AutoDiscoverSMTPAddress";
    export var CertPrincipalName: string = "CertPrincipalName";
    export var GroupingInformation: string = "GroupingInformation";
    /* #endregion */

    /* #region InboxRule */
    export var MailboxSmtpAddress: string = "MailboxSmtpAddress";
    export var RuleId: string = "RuleId";
    export var Priority: string = "Priority";
    export var IsEnabled: string = "IsEnabled";
    export var IsNotSupported: string = "IsNotSupported";
    export var IsInError: string = "IsInError";
    export var Conditions: string = "Conditions";
    export var Exceptions: string = "Exceptions";
    export var Actions: string = "Actions";
    export var InboxRules: string = "InboxRules";
    export var Rule: string = "Rule";
    export var OutlookRuleBlobExists: string = "OutlookRuleBlobExists";
    export var RemoveOutlookRuleBlob: string = "RemoveOutlookRuleBlob";
    export var ContainsBodyStrings: string = "ContainsBodyStrings";
    export var ContainsHeaderStrings: string = "ContainsHeaderStrings";
    export var ContainsRecipientStrings: string = "ContainsRecipientStrings";
    export var ContainsSenderStrings: string = "ContainsSenderStrings";
    export var ContainsSubjectOrBodyStrings: string = "ContainsSubjectOrBodyStrings";
    export var ContainsSubjectStrings: string = "ContainsSubjectStrings";
    export var FlaggedForAction: string = "FlaggedForAction";
    export var FromAddresses: string = "FromAddresses";
    export var FromConnectedAccounts: string = "FromConnectedAccounts";
    export var IsApprovalRequest: string = "IsApprovalRequest";
    export var IsAutomaticForward: string = "IsAutomaticForward";
    export var IsAutomaticReply: string = "IsAutomaticReply";
    export var IsEncrypted: string = "IsEncrypted";
    export var IsMeetingRequest: string = "IsMeetingRequest";
    export var IsMeetingResponse: string = "IsMeetingResponse";
    export var IsNDR: string = "IsNDR";
    export var IsPermissionControlled: string = "IsPermissionControlled";
    export var IsSigned: string = "IsSigned";
    export var IsVoicemail: string = "IsVoicemail";
    export var IsReadReceipt: string = "IsReadReceipt";
    export var MessageClassifications: string = "MessageClassifications";
    export var NotSentToMe: string = "NotSentToMe";
    export var SentCcMe: string = "SentCcMe";
    export var SentOnlyToMe: string = "SentOnlyToMe";
    export var SentToAddresses: string = "SentToAddresses";
    export var SentToMe: string = "SentToMe";
    export var SentToOrCcMe: string = "SentToOrCcMe";
    export var WithinDateRange: string = "WithinDateRange";
    export var WithinSizeRange: string = "WithinSizeRange";
    export var MinimumSize: string = "MinimumSize";
    export var MaximumSize: string = "MaximumSize";
    export var StartDateTime: string = "StartDateTime";
    export var EndDateTime: string = "EndDateTime";
    export var AssignCategories: string = "AssignCategories";
    export var CopyToFolder: string = "CopyToFolder";
    export var FlagMessage: string = "FlagMessage";
    export var ForwardAsAttachmentToRecipients: string = "ForwardAsAttachmentToRecipients";
    export var ForwardToRecipients: string = "ForwardToRecipients";
    export var MarkImportance: string = "MarkImportance";
    export var MarkAsRead: string = "MarkAsRead";
    export var MoveToFolder: string = "MoveToFolder";
    export var PermanentDelete: string = "PermanentDelete";
    export var RedirectToRecipients: string = "RedirectToRecipients";
    export var SendSMSAlertToRecipients: string = "SendSMSAlertToRecipients";
    export var ServerReplyWithMessage: string = "ServerReplyWithMessage";
    export var StopProcessingRules: string = "StopProcessingRules";
    export var CreateRuleOperation: string = "CreateRuleOperation";
    export var SetRuleOperation: string = "SetRuleOperation";
    export var DeleteRuleOperation: string = "DeleteRuleOperation";
    export var Operations: string = "Operations";
    export var RuleOperationErrors: string = "RuleOperationErrors";
    export var RuleOperationError: string = "RuleOperationError";
    export var OperationIndex: string = "OperationIndex";
    export var ValidationErrors: string = "ValidationErrors";
    export var FieldValue: string = "FieldValue";
    /* #endregion */

    /* #region Restrictions */
    export var Not: string = "Not";
    export var Bitmask: string = "Bitmask";
    export var Constant: string = "Constant";
    export var Restriction: string = "Restriction";
    export var Condition: string = "Condition";
    export var Contains: string = "Contains";
    export var Excludes: string = "Excludes";
    export var Exists: string = "Exists";
    export var FieldURIOrConstant: string = "FieldURIOrConstant";
    export var And: string = "And";
    export var Or: string = "Or";
    export var IsEqualTo: string = "IsEqualTo";
    export var IsNotEqualTo: string = "IsNotEqualTo";
    export var IsGreaterThan: string = "IsGreaterThan";
    export var IsGreaterThanOrEqualTo: string = "IsGreaterThanOrEqualTo";
    export var IsLessThan: string = "IsLessThan";
    export var IsLessThanOrEqualTo: string = "IsLessThanOrEqualTo";
    /* #endregion */
        
    /* #region Directory only contact properties */
    export var PhoneticFullName: string = "PhoneticFullName";
    export var PhoneticFirstName: string = "PhoneticFirstName";
    export var PhoneticLastName: string = "PhoneticLastName";
    export var Alias: string = "Alias";
    export var Notes: string = "Notes";
    export var Photo: string = "Photo";
    export var UserSMIMECertificate: string = "UserSMIMECertificate";
    export var MSExchangeCertificate: string = "MSExchangeCertificate";
    export var DirectoryId: string = "DirectoryId";
    export var ManagerMailbox: string = "ManagerMailbox";
    export var DirectReports: string = "DirectReports";
    /* #endregion */

    /* #region Photos */

    export var SizeRequested: string = "SizeRequested";
    export var HasChanged: string = "HasChanged";
    export var PictureData: string = "PictureData";

    /* #endregion */

    /* #region Request/response element names */
    export var ResponseMessage: string = "ResponseMessage";
    export var ResponseMessages: string = "ResponseMessages";

    // FindConversation
    export var FindConversation: string = "FindConversation";
    export var FindConversationResponse: string = "FindConversationResponse";
    export var FindConversationResponseMessage: string = "FindConversationResponseMessage";

    // GetConversationItems
    export var GetConversationItems: string = "GetConversationItems";
    export var GetConversationItemsResponse: string = "GetConversationItemsResponse";
    export var GetConversationItemsResponseMessage: string = "GetConversationItemsResponseMessage";

    // FindItem
    export var FindItem: string = "FindItem";
    export var FindItemResponse: string = "FindItemResponse";
    export var FindItemResponseMessage: string = "FindItemResponseMessage";

    // GetItem
    export var GetItem: string = "GetItem";
    export var GetItemResponse: string = "GetItemResponse";
    export var GetItemResponseMessage: string = "GetItemResponseMessage";

    // CreateItem
    export var CreateItem: string = "CreateItem";
    export var CreateItemResponse: string = "CreateItemResponse";
    export var CreateItemResponseMessage: string = "CreateItemResponseMessage";

    // SendItem
    export var SendItem: string = "SendItem";
    export var SendItemResponse: string = "SendItemResponse";
    export var SendItemResponseMessage: string = "SendItemResponseMessage";

    // DeleteItem
    export var DeleteItem: string = "DeleteItem";
    export var DeleteItemResponse: string = "DeleteItemResponse";
    export var DeleteItemResponseMessage: string = "DeleteItemResponseMessage";

    // UpdateItem
    export var UpdateItem: string = "UpdateItem";
    export var UpdateItemResponse: string = "UpdateItemResponse";
    export var UpdateItemResponseMessage: string = "UpdateItemResponseMessage";

    // CopyItem
    export var CopyItem: string = "CopyItem";
    export var CopyItemResponse: string = "CopyItemResponse";
    export var CopyItemResponseMessage: string = "CopyItemResponseMessage";

    // MoveItem
    export var MoveItem: string = "MoveItem";
    export var MoveItemResponse: string = "MoveItemResponse";
    export var MoveItemResponseMessage: string = "MoveItemResponseMessage";

    // ArchiveItem
    export var ArchiveItem: string = "ArchiveItem";
    export var ArchiveItemResponse: string = "ArchiveItemResponse";
    export var ArchiveItemResponseMessage: string = "ArchiveItemResponseMessage";
    export var ArchiveSourceFolderId: string = "ArchiveSourceFolderId";

    // FindFolder
    export var FindFolder: string = "FindFolder";
    export var FindFolderResponse: string = "FindFolderResponse";
    export var FindFolderResponseMessage: string = "FindFolderResponseMessage";

    // GetFolder
    export var GetFolder: string = "GetFolder";
    export var GetFolderResponse: string = "GetFolderResponse";
    export var GetFolderResponseMessage: string = "GetFolderResponseMessage";

    // CreateFolder
    export var CreateFolder: string = "CreateFolder";
    export var CreateFolderResponse: string = "CreateFolderResponse";
    export var CreateFolderResponseMessage: string = "CreateFolderResponseMessage";

    // DeleteFolder
    export var DeleteFolder: string = "DeleteFolder";
    export var DeleteFolderResponse: string = "DeleteFolderResponse";
    export var DeleteFolderResponseMessage: string = "DeleteFolderResponseMessage";

    // EmptyFolder
    export var EmptyFolder: string = "EmptyFolder";
    export var EmptyFolderResponse: string = "EmptyFolderResponse";
    export var EmptyFolderResponseMessage: string = "EmptyFolderResponseMessage";

    // UpdateFolder
    export var UpdateFolder: string = "UpdateFolder";
    export var UpdateFolderResponse: string = "UpdateFolderResponse";
    export var UpdateFolderResponseMessage: string = "UpdateFolderResponseMessage";

    // CopyFolder
    export var CopyFolder: string = "CopyFolder";
    export var CopyFolderResponse: string = "CopyFolderResponse";
    export var CopyFolderResponseMessage: string = "CopyFolderResponseMessage";

    // MoveFolder
    export var MoveFolder: string = "MoveFolder";
    export var MoveFolderResponse: string = "MoveFolderResponse";
    export var MoveFolderResponseMessage: string = "MoveFolderResponseMessage";

    // MarkAllItemsAsRead
    export var MarkAllItemsAsRead: string = "MarkAllItemsAsRead";
    export var MarkAllItemsAsReadResponse: string = "MarkAllItemsAsReadResponse";
    export var MarkAllItemsAsReadResponseMessage: string = "MarkAllItemsAsReadResponseMessage";

    // FindPeople
    export var FindPeople: string = "FindPeople";
    export var FindPeopleResponse: string = "FindPeopleResponse";
    export var FindPeopleResponseMessage: string = "FindPeopleResponseMessage";

    // GetPeopleInsights
    export var GetPeopleInsights: string = "GetPeopleInsights";
    export var GetPeopleInsightsResponse: string = "GetPeopleInsightsResponse";
    export var GetPeopleInsightsResponseMessage: string = "GetPeopleInsightsResponseMessage";

    // GetUserPhoto
    export var GetUserPhoto: string = "GetUserPhoto";
    export var GetUserPhotoResponse: string = "GetUserPhotoResponse";
    export var GetUserPhotoResponseMessage: string = "GetUserPhotoResponseMessage";

    // GetAttachment
    export var GetAttachment: string = "GetAttachment";
    export var GetAttachmentResponse: string = "GetAttachmentResponse";
    export var GetAttachmentResponseMessage: string = "GetAttachmentResponseMessage";

    // CreateAttachment
    export var CreateAttachment: string = "CreateAttachment";
    export var CreateAttachmentResponse: string = "CreateAttachmentResponse";
    export var CreateAttachmentResponseMessage: string = "CreateAttachmentResponseMessage";

    // DeleteAttachment
    export var DeleteAttachment: string = "DeleteAttachment";
    export var DeleteAttachmentResponse: string = "DeleteAttachmentResponse";
    export var DeleteAttachmentResponseMessage: string = "DeleteAttachmentResponseMessage";

    // ResolveNames
    export var ResolveNames: string = "ResolveNames";
    export var ResolveNamesResponse: string = "ResolveNamesResponse";
    export var ResolveNamesResponseMessage: string = "ResolveNamesResponseMessage";

    // ExpandDL
    export var ExpandDL: string = "ExpandDL";
    export var ExpandDLResponse: string = "ExpandDLResponse";
    export var ExpandDLResponseMessage: string = "ExpandDLResponseMessage";

    // Subscribe
    export var Subscribe: string = "Subscribe";
    export var SubscribeResponse: string = "SubscribeResponse";
    export var SubscribeResponseMessage: string = "SubscribeResponseMessage";
    export var SubscriptionRequest: string = "SubscriptionRequest";

    // Unsubscribe
    export var Unsubscribe: string = "Unsubscribe";
    export var UnsubscribeResponse: string = "UnsubscribeResponse";
    export var UnsubscribeResponseMessage: string = "UnsubscribeResponseMessage";

    // GetEvents
    export var GetEvents: string = "GetEvents";
    export var GetEventsResponse: string = "GetEventsResponse";
    export var GetEventsResponseMessage: string = "GetEventsResponseMessage";

    // GetStreamingEvents
    export var GetStreamingEvents: string = "GetStreamingEvents";
    export var GetStreamingEventsResponse: string = "GetStreamingEventsResponse";
    export var GetStreamingEventsResponseMessage: string = "GetStreamingEventsResponseMessage";
    export var ConnectionStatus: string = "ConnectionStatus";
    export var ErrorSubscriptionIds: string = "ErrorSubscriptionIds";
    export var ConnectionTimeout: string = "ConnectionTimeout";
    export var HeartbeatFrequency: string = "HeartbeatFrequency";

    // SyncFolderItems
    export var SyncFolderItems: string = "SyncFolderItems";
    export var SyncFolderItemsResponse: string = "SyncFolderItemsResponse";
    export var SyncFolderItemsResponseMessage: string = "SyncFolderItemsResponseMessage";

    // SyncFolderHierarchy
    export var SyncFolderHierarchy: string = "SyncFolderHierarchy";
    export var SyncFolderHierarchyResponse: string = "SyncFolderHierarchyResponse";
    export var SyncFolderHierarchyResponseMessage: string = "SyncFolderHierarchyResponseMessage";

    // GetUserOofSettings
    export var GetUserOofSettingsRequest: string = "GetUserOofSettingsRequest";
    export var GetUserOofSettingsResponse: string = "GetUserOofSettingsResponse";

    // SetUserOofSettings
    export var SetUserOofSettingsRequest: string = "SetUserOofSettingsRequest";
    export var SetUserOofSettingsResponse: string = "SetUserOofSettingsResponse";

    // GetUserAvailability
    export var GetUserAvailabilityRequest: string = "GetUserAvailabilityRequest";
    export var GetUserAvailabilityResponse: string = "GetUserAvailabilityResponse";
    export var FreeBusyResponseArray: string = "FreeBusyResponseArray";
    export var FreeBusyResponse: string = "FreeBusyResponse";
    export var SuggestionsResponse: string = "SuggestionsResponse";

    // GetRoomLists
    export var GetRoomListsRequest: string = "GetRoomLists";
    export var GetRoomListsResponse: string = "GetRoomListsResponse";

    // GetRooms
    export var GetRoomsRequest: string = "GetRooms";
    export var GetRoomsResponse: string = "GetRoomsResponse";

    // ConvertId
    export var ConvertId: string = "ConvertId";
    export var ConvertIdResponse: string = "ConvertIdResponse";
    export var ConvertIdResponseMessage: string = "ConvertIdResponseMessage";

    // AddDelegate
    export var AddDelegate: string = "AddDelegate";
    export var AddDelegateResponse: string = "AddDelegateResponse";
    export var DelegateUserResponseMessageType: string = "DelegateUserResponseMessageType";

    // RemoveDelegte
    export var RemoveDelegate: string = "RemoveDelegate";
    export var RemoveDelegateResponse: string = "RemoveDelegateResponse";

    // GetDelegate
    export var GetDelegate: string = "GetDelegate";
    export var GetDelegateResponse: string = "GetDelegateResponse";

    // UpdateDelegate
    export var UpdateDelegate: string = "UpdateDelegate";
    export var UpdateDelegateResponse: string = "UpdateDelegateResponse";

    // CreateUserConfiguration
    export var CreateUserConfiguration: string = "CreateUserConfiguration";
    export var CreateUserConfigurationResponse: string = "CreateUserConfigurationResponse";
    export var CreateUserConfigurationResponseMessage: string = "CreateUserConfigurationResponseMessage";

    // DeleteUserConfiguration
    export var DeleteUserConfiguration: string = "DeleteUserConfiguration";
    export var DeleteUserConfigurationResponse: string = "DeleteUserConfigurationResponse";
    export var DeleteUserConfigurationResponseMessage: string = "DeleteUserConfigurationResponseMessage";

    // GetUserConfiguration
    export var GetUserConfiguration: string = "GetUserConfiguration";
    export var GetUserConfigurationResponse: string = "GetUserConfigurationResponse";
    export var GetUserConfigurationResponseMessage: string = "GetUserConfigurationResponseMessage";

    // UpdateUserConfiguration
    export var UpdateUserConfiguration: string = "UpdateUserConfiguration";
    export var UpdateUserConfigurationResponse: string = "UpdateUserConfigurationResponse";
    export var UpdateUserConfigurationResponseMessage: string = "UpdateUserConfigurationResponseMessage";

    // PlayOnPhone
    export var PlayOnPhone: string = "PlayOnPhone";
    export var PlayOnPhoneResponse: string = "PlayOnPhoneResponse";

    // GetPhoneCallInformation
    export var GetPhoneCall: string = "GetPhoneCallInformation";
    export var GetPhoneCallResponse: string = "GetPhoneCallInformationResponse";

    // DisconnectCall
    export var DisconnectPhoneCall: string = "DisconnectPhoneCall";
    export var DisconnectPhoneCallResponse: string = "DisconnectPhoneCallResponse";

    // GetServerTimeZones
    export var GetServerTimeZones: string = "GetServerTimeZones";
    export var GetServerTimeZonesResponse: string = "GetServerTimeZonesResponse";
    export var GetServerTimeZonesResponseMessage: string = "GetServerTimeZonesResponseMessage";

    // GetInboxRules
    export var GetInboxRules: string = "GetInboxRules";
    export var GetInboxRulesResponse: string = "GetInboxRulesResponse";

    // UpdateInboxRules
    export var UpdateInboxRules: string = "UpdateInboxRules";
    export var UpdateInboxRulesResponse: string = "UpdateInboxRulesResponse";

    // ExecuteDiagnosticMethod
    export var ExecuteDiagnosticMethod: string = "ExecuteDiagnosticMethod";
    export var ExecuteDiagnosticMethodResponse: string = "ExecuteDiagnosticMethodResponse";
    export var ExecuteDiagnosticMethodResponseMEssage: string = "ExecuteDiagnosticMethodResponseMessage";

    //GetPasswordExpirationDate
    export var GetPasswordExpirationDateRequest: string = "GetPasswordExpirationDate";
    export var GetPasswordExpirationDateResponse: string = "GetPasswordExpirationDateResponse";

    // GetSearchableMailboxes
    export var GetSearchableMailboxes: string = "GetSearchableMailboxes";
    export var GetSearchableMailboxesResponse: string = "GetSearchableMailboxesResponse";

    // GetDiscoverySearchConfiguration
    export var GetDiscoverySearchConfiguration: string = "GetDiscoverySearchConfiguration";
    export var GetDiscoverySearchConfigurationResponse: string = "GetDiscoverySearchConfigurationResponse";

    // GetHoldOnMailboxes
    export var GetHoldOnMailboxes: string = "GetHoldOnMailboxes";
    export var GetHoldOnMailboxesResponse: string = "GetHoldOnMailboxesResponse";

    // SetHoldOnMailboxes
    export var SetHoldOnMailboxes: string = "SetHoldOnMailboxes";
    export var SetHoldOnMailboxesResponse: string = "SetHoldOnMailboxesResponse";

    // SearchMailboxes
    export var SearchMailboxes: string = "SearchMailboxes";
    export var SearchMailboxesResponse: string = "SearchMailboxesResponse";
    export var SearchMailboxesResponseMessage: string = "SearchMailboxesResponseMessage";

    // GetNonIndexableItemDetails
    export var GetNonIndexableItemDetails: string = "GetNonIndexableItemDetails";
    export var GetNonIndexableItemDetailsResponse: string = "GetNonIndexableItemDetailsResponse";

    // GetNonIndexableItemStatistics
    export var GetNonIndexableItemStatistics: string = "GetNonIndexableItemStatistics";
    export var GetNonIndexableItemStatisticsResponse: string = "GetNonIndexableItemStatisticsResponse";

    // eDiscovery
    export var SearchQueries: string = "SearchQueries";
    export var SearchQuery: string = "SearchQuery";
    export var MailboxQuery: string = "MailboxQuery";
    export var Query: string = "Query";
    export var MailboxSearchScopes: string = "MailboxSearchScopes";
    export var MailboxSearchScope: string = "MailboxSearchScope";
    export var SearchScope: string = "SearchScope";
    export var ResultType: string = "ResultType";
    export var SortBy: string = "SortBy";
    export var Order: string = "Order";
    export var Language: string = "Language";
    export var Deduplication: string = "Deduplication";
    export var PageSize: string = "PageSize";
    export var PageItemReference: string = "PageItemReference";
    export var PageDirection: string = "PageDirection";
    export var PreviewItemResponseShape: string = "PreviewItemResponseShape";
    export var ExtendedProperties: string = "ExtendedProperties";
    export var PageItemSize: string = "PageItemSize";
    export var PageItemCount: string = "PageItemCount";
    export var ItemCount: string = "ItemCount";
    export var KeywordStats: string = "KeywordStats";
    export var KeywordStat: string = "KeywordStat";
    export var Keyword: string = "Keyword";
    export var ItemHits: string = "ItemHits";
    export var SearchPreviewItem: string = "SearchPreviewItem";
    export var ChangeKey: string = "ChangeKey";
    export var ParentId: string = "ParentId";
    export var MailboxId: string = "MailboxId";
    export var UniqueHash: string = "UniqueHash";
    export var SortValue: string = "SortValue";
    export var OwaLink: string = "OwaLink";
    export var SmtpAddress: string = "SmtpAddress";
    export var CreatedTime: string = "CreatedTime";
    export var ReceivedTime: string = "ReceivedTime";
    export var SentTime: string = "SentTime";
    export var Preview: string = "Preview";
    export var HasAttachment: string = "HasAttachment";
    export var FailedMailboxes: string = "FailedMailboxes";
    export var FailedMailbox: string = "FailedMailbox";
    export var Token: string = "Token";
    export var Refiners: string = "Refiners";
    export var Refiner: string = "Refiner";
    export var MailboxStats: string = "MailboxStats";
    export var MailboxStat: string = "MailboxStat";
    export var HoldId: string = "HoldId";
    export var ActionType: string = "ActionType";
    export var Mailboxes: string = "Mailboxes";
    export var SearchFilter: string = "SearchFilter";
    export var ReferenceId: string = "ReferenceId";
    export var IsMembershipGroup: string = "IsMembershipGroup";
    export var ExpandGroupMembership: string = "ExpandGroupMembership";
    export var SearchableMailboxes: string = "SearchableMailboxes";
    export var SearchableMailbox: string = "SearchableMailbox";
    export var SearchMailboxesResult: string = "SearchMailboxesResult";
    export var MailboxHoldResult: string = "MailboxHoldResult";
    export var Statuses: string = "Statuses";
    export var MailboxHoldStatuses: string = "MailboxHoldStatuses";
    export var MailboxHoldStatus: string = "MailboxHoldStatus";
    export var AdditionalInfo: string = "AdditionalInfo";
    export var NonIndexableItemDetail: string = "NonIndexableItemDetail";
    export var NonIndexableItemStatistic: string = "NonIndexableItemStatistic";
    export var NonIndexableItemDetails: string = "NonIndexableItemDetails";
    export var NonIndexableItemStatistics: string = "NonIndexableItemStatistics";
    export var NonIndexableItemDetailsResult: string = "NonIndexableItemDetailsResult";
    export var SearchArchiveOnly: string = "SearchArchiveOnly";
    export var ErrorDescription: string = "ErrorDescription";
    export var IsPartiallyIndexed: string = "IsPartiallyIndexed";
    export var IsPermanentFailure: string = "IsPermanentFailure";
    export var AttemptCount: string = "AttemptCount";
    export var LastAttemptTime: string = "LastAttemptTime";
    export var SearchId: string = "SearchId";
    export var DiscoverySearchConfigurations: string = "DiscoverySearchConfigurations";
    export var DiscoverySearchConfiguration: string = "DiscoverySearchConfiguration";
    export var InPlaceHoldConfigurationOnly: string = "InPlaceHoldConfigurationOnly";
    export var InPlaceHoldIdentity: string = "InPlaceHoldIdentity";
    export var ItemHoldPeriod: string = "ItemHoldPeriod";
    export var ManagedByOrganization: string = "ManagedByOrganization";
    export var IsExternalMailbox: string = "IsExternalMailbox";
    export var ExternalEmailAddress: string = "ExternalEmailAddress";
    export var ExtendedAttributes: string = "ExtendedAttributes";
    export var ExtendedAttribute: string = "ExtendedAttribute";
    export var ExtendedAttributeName: string = "Name";
    export var ExtendedAttributeValue: string = "Value";
    export var SearchScopeType: string = "SearchScopeType";

    // GetAppManifests
    export var GetAppManifestsRequest: string = "GetAppManifests";
    export var GetAppManifestsResponse: string = "GetAppManifestsResponse";
    export var Manifests: string = "Manifests";
    export var Manifest: string = "Manifest";

    // GetAppManifests for TargetServerVersion > 2.5
    export var Apps: string = "Apps";
    export var App: string = "App";
    export var Metadata: string = "Metadata";
    export var ActionUrl: string = "ActionUrl";
    export var AppStatus: string = "AppStatus";
    export var EndNodeUrl: string = "EndNodeUrl";

    // GetClientExtension/SetClientExtension
    export var GetClientExtensionRequest: string = "GetClientExtension";
    export var ClientExtensionUserRequest: string = "UserParameters";
    export var ClientExtensionUserEnabled: string = "UserEnabledExtensions";
    export var ClientExtensionUserDisabled: string = "UserDisabledExtensions";
    export var ClientExtensionRequestedIds: string = "RequestedExtensionIds";
    export var ClientExtensionIsDebug: string = "IsDebug";
    export var ClientExtensionRawMasterTableXml: string = "RawMasterTableXml";
    export var GetClientExtensionResponse: string = "GetClientExtensionResponse";
    export var ClientExtensionSpecificUsers: string = "SpecificUsers";
    export var ClientExtensions: string = "ClientExtensions";
    export var ClientExtension: string = "ClientExtension";
    export var SetClientExtensionRequest: string = "SetClientExtension";
    export var SetClientExtensionActions: string = "Actions";
    export var SetClientExtensionAction: string = "Action";
    export var SetClientExtensionResponse: string = "SetClientExtensionResponse";
    export var SetClientExtensionResponseMessage: string = "SetClientExtensionResponseMessage";

    // GetEncryptionConfiguration/SetEncryptionConfiguration
    export var GetEncryptionConfigurationRequest: string = "GetEncryptionConfiguration";
    export var SetEncryptionConfigurationRequest: string = "SetEncryptionConfiguration";
    export var EncryptionConfigurationImageBase64: string = "ImageBase64";
    export var EncryptionConfigurationEmailText: string = "EmailText";
    export var EncryptionConfigurationPortalText: string = "PortalText";
    export var EncryptionConfigurationDisclaimerText: string = "DisclaimerText";
    export var EncryptionConfigurationOTPEnabled: string = "OTPEnabled";
    export var GetEncryptionConfigurationResponse: string = "GetEncryptionConfigurationResponse";
    export var SetEncryptionConfigurationResponse: string = "SetEncryptionConfigurationResponse";

    // GetOMEConfiguration/SetOMEConfiguration
    export var GetOMEConfigurationRequest: string = "GetOMEConfiguration";
    export var SetOMEConfigurationRequest: string = "SetOMEConfiguration";
    export var OMEConfigurationXml: string = "Xml";
    export var GetOMEConfigurationResponse: string = "GetOMEConfigurationResponse";
    export var SetOMEConfigurationResponse: string = "SetOMEConfigurationResponse";

    // InstallApp
    export var InstallAppRequest: string = "InstallApp";
    export var InstallAppResponse: string = "InstallAppResponse";

    // UninstallApp
    export var UninstallAppRequest: string = "UninstallApp";
    export var UninstallAppResponse: string = "UninstallAppResponse";

    // DisableApp
    export var DisableAppRequest: string = "DisableApp";
    export var DisableAppResponse: string = "DisableAppResponse";

    // RegisterConsent
    export var RegisterConsentRequest: string = "RegisterConsent";
    export var RegisterConsentResponse: string = "RegisterConsentResponse";

    // GetAppMarketplaceUrl
    export var GetAppMarketplaceUrlRequest: string = "GetAppMarketplaceUrl";
    export var GetAppMarketplaceUrlResponse: string = "GetAppMarketplaceUrlResponse";

    // GetUserRetentionPolicyTags
    export var GetUserRetentionPolicyTags: string = "GetUserRetentionPolicyTags";
    export var GetUserRetentionPolicyTagsResponse: string = "GetUserRetentionPolicyTagsResponse";

    // MRM
    export var RetentionPolicyTags: string = "RetentionPolicyTags";
    export var RetentionPolicyTag: string = "RetentionPolicyTag";
    export var RetentionId: string = "RetentionId";
    export var RetentionPeriod: string = "RetentionPeriod";
    export var RetentionAction: string = "RetentionAction";
    export var Description: string = "Description";
    export var IsVisible: string = "IsVisible";
    export var OptedInto: string = "OptedInto";
    export var IsArchive: string = "IsArchive";

    /* #endregion */

    /* #region Groups */

    // GetUserUnifiedGroups
    export var GetUserUnifiedGroups: string = "GetUserUnifiedGroups";
    export var RequestedGroupsSets: string = "RequestedGroupsSets";
    export var RequestedUnifiedGroupsSetItem: string = "RequestedUnifiedGroupsSet";
    export var SortType: string = "SortType";
    export var FilterType: string = "FilterType";
    export var SortDirection: string = "SortDirection";
    export var GroupsLimit: string = "GroupsLimit";
    export var UserSmtpAddress: string = "UserSmtpAddress";

    export var GetUserUnifiedGroupsResponseMessage: string = "GetUserUnifiedGroupsResponseMessage";
    export var GroupsSets: string = "GroupsSets";
    export var UnifiedGroupsSet: string = "UnifiedGroupsSet";
    export var TotalGroups: string = "TotalGroups";
    export var GroupsTag: string = "Groups";
    export var UnifiedGroup: string = "UnifiedGroup";
    export var MailboxGuid: string = "MailboxGuid";
    export var LastVisitedTimeUtc: string = "LastVisitedTimeUtc";
    export var AccessType: string = "AccessType";
    export var ExternalDirectoryObjectId: string = "ExternalDirectoryObjectId";

    // GetUnifiedGroupUnseenCount
    export var GetUnifiedGroupUnseenCount: string = "GetUnifiedGroupUnseenCount";
    export var GroupIdentity: string = "GroupIdentity";
    export var GroupIdentityType: string = "IdentityType";
    export var GroupIdentityValue: string = "Value";

    export var GetUnifiedGroupUnseenCountResponseMessage: string = "GetUnifiedGroupUnseenCountResponseMessage";
    export var UnseenCount: string = "UnseenCount";

    // SetUnifiedGroupLastVisitedTimeRequest
    export var SetUnifiedGroupLastVisitedTime: string = "SetUnifiedGroupLastVisitedTime";
    export var SetUnifiedGroupLastVisitedTimeResponseMessage: string = "SetUnifiedGroupLastVisitedTimeResponseMessage";
    /* #endregion */

    /* #region SOAP element names */

    export var SOAPEnvelopeElementName: string = "Envelope";
    export var SOAPHeaderElementName: string = "Header";
    export var SOAPBodyElementName: string = "Body";
    export var SOAPFaultElementName: string = "Fault";
    export var SOAPFaultCodeElementName: string = "faultcode";
    export var SOAPFaultStringElementName: string = "faultstring";
    export var SOAPFaultActorElementName: string = "faultactor";
    export var SOAPDetailElementName: string = "detail";
    export var EwsResponseCodeElementName: string = "ResponseCode";
    export var EwsMessageElementName: string = "Message";
    export var EwsLineElementName: string = "Line";
    export var EwsPositionElementName: string = "Position";
    export var EwsErrorCodeElementName: string = "ErrorCode";         // Generated by Availability
    export var EwsExceptionTypeElementName: string = "ExceptionType"; // Generated by UM

    /* #endregion */
}