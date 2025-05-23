import { type HelixEventSubDropEntitlementGrantFilter } from '@twurple/api';
import type { UserIdResolvable } from '@twurple/common';
import { type EventSubChannelChatNotificationEvent } from './events/chatNotifications/EventSubChannelChatNotificationEvent';
import { type EventSubAutoModMessageHoldEvent } from './events/EventSubAutoModMessageHoldEvent';
import { type EventSubAutoModMessageUpdateEvent } from './events/EventSubAutoModMessageUpdateEvent';
import { type EventSubAutoModMessageHoldV2Event } from './events/EventSubAutoModMessageHoldV2Event';
import { type EventSubAutoModMessageUpdateV2Event } from './events/EventSubAutoModMessageUpdateV2Event';
import { type EventSubAutoModSettingsUpdateEvent } from './events/EventSubAutoModSettingsUpdateEvent';
import { type EventSubAutoModTermsUpdateEvent } from './events/EventSubAutoModTermsUpdateEvent';
import { type EventSubChannelChatUserMessageHoldEvent } from './events/EventSubChannelChatUserMessageHoldEvent';
import { type EventSubChannelChatUserMessageUpdateEvent } from './events/EventSubChannelChatUserMessageUpdateEvent';
import type { EventSubChannelAdBreakBeginEvent } from './events/EventSubChannelAdBreakBeginEvent';
import type { EventSubChannelBanEvent } from './events/EventSubChannelBanEvent';
import type { EventSubChannelCharityCampaignProgressEvent } from './events/EventSubChannelCharityCampaignProgressEvent';
import type { EventSubChannelCharityCampaignStartEvent } from './events/EventSubChannelCharityCampaignStartEvent';
import type { EventSubChannelCharityCampaignStopEvent } from './events/EventSubChannelCharityCampaignStopEvent';
import type { EventSubChannelCharityDonationEvent } from './events/EventSubChannelCharityDonationEvent';
import type { EventSubChannelChatClearEvent } from './events/EventSubChannelChatClearEvent';
import type { EventSubChannelChatClearUserMessagesEvent } from './events/EventSubChannelChatClearUserMessagesEvent';
import type { EventSubChannelChatMessageDeleteEvent } from './events/EventSubChannelChatMessageDeleteEvent';
import { type EventSubChannelChatMessageEvent } from './events/EventSubChannelChatMessageEvent';
import type { EventSubChannelChatSettingsUpdateEvent } from './events/EventSubChannelChatSettingsUpdateEvent';
import type { EventSubChannelCheerEvent } from './events/EventSubChannelCheerEvent';
import type { EventSubChannelFollowEvent } from './events/EventSubChannelFollowEvent';
import type { EventSubChannelGoalBeginEvent } from './events/EventSubChannelGoalBeginEvent';
import type { EventSubChannelGoalEndEvent } from './events/EventSubChannelGoalEndEvent';
import type { EventSubChannelGoalProgressEvent } from './events/EventSubChannelGoalProgressEvent';
import type { EventSubChannelHypeTrainBeginEvent } from './events/EventSubChannelHypeTrainBeginEvent';
import type { EventSubChannelHypeTrainEndEvent } from './events/EventSubChannelHypeTrainEndEvent';
import type { EventSubChannelHypeTrainProgressEvent } from './events/EventSubChannelHypeTrainProgressEvent';
import { type EventSubChannelModerationEvent } from './events/moderation/EventSubChannelModerationEvent';
import type { EventSubChannelModeratorEvent } from './events/EventSubChannelModeratorEvent';
import type { EventSubChannelPollBeginEvent } from './events/EventSubChannelPollBeginEvent';
import type { EventSubChannelPollEndEvent } from './events/EventSubChannelPollEndEvent';
import type { EventSubChannelPollProgressEvent } from './events/EventSubChannelPollProgressEvent';
import type { EventSubChannelPredictionBeginEvent } from './events/EventSubChannelPredictionBeginEvent';
import type { EventSubChannelPredictionEndEvent } from './events/EventSubChannelPredictionEndEvent';
import type { EventSubChannelPredictionLockEvent } from './events/EventSubChannelPredictionLockEvent';
import type { EventSubChannelPredictionProgressEvent } from './events/EventSubChannelPredictionProgressEvent';
import type { EventSubChannelRaidEvent } from './events/EventSubChannelRaidEvent';
import type { EventSubChannelRedemptionAddEvent } from './events/EventSubChannelRedemptionAddEvent';
import type { EventSubChannelRedemptionUpdateEvent } from './events/EventSubChannelRedemptionUpdateEvent';
import type { EventSubChannelRewardEvent } from './events/EventSubChannelRewardEvent';
import type { EventSubChannelAutomaticRewardRedemptionAddEvent } from './events/EventSubChannelAutomaticRewardRedemptionAddEvent';
import type { EventSubChannelShieldModeBeginEvent } from './events/EventSubChannelShieldModeBeginEvent';
import type { EventSubChannelShieldModeEndEvent } from './events/EventSubChannelShieldModeEndEvent';
import type { EventSubChannelShoutoutCreateEvent } from './events/EventSubChannelShoutoutCreateEvent';
import type { EventSubChannelShoutoutReceiveEvent } from './events/EventSubChannelShoutoutReceiveEvent';
import type { EventSubChannelSubscriptionEndEvent } from './events/EventSubChannelSubscriptionEndEvent';
import type { EventSubChannelSubscriptionEvent } from './events/EventSubChannelSubscriptionEvent';
import type { EventSubChannelSubscriptionGiftEvent } from './events/EventSubChannelSubscriptionGiftEvent';
import type { EventSubChannelSubscriptionMessageEvent } from './events/EventSubChannelSubscriptionMessageEvent';
import type { EventSubChannelSuspiciousUserUpdateEvent } from './events/EventSubChannelSuspiciousUserUpdateEvent';
import type { EventSubChannelSuspiciousUserMessageEvent } from './events/EventSubChannelSuspiciousUserMessageEvent';
import type { EventSubChannelUnbanEvent } from './events/EventSubChannelUnbanEvent';
import { type EventSubChannelUnbanRequestCreateEvent } from './events/EventSubChannelUnbanRequestCreateEvent';
import { type EventSubChannelUnbanRequestResolveEvent } from './events/EventSubChannelUnbanRequestResolveEvent';
import type { EventSubChannelUpdateEvent } from './events/EventSubChannelUpdateEvent';
import { type EventSubChannelVipEvent } from './events/EventSubChannelVipEvent';
import { type EventSubChannelWarningAcknowledgeEvent } from './events/EventSubChannelWarningAcknowledgeEvent';
import { type EventSubChannelWarningSendEvent } from './events/EventSubChannelWarningSendEvent';
import { type EventSubChannelSharedChatSessionBeginEvent } from './events/EventSubChannelSharedChatSessionBeginEvent';
import { type EventSubChannelSharedChatSessionUpdateEvent } from './events/EventSubChannelSharedChatSessionUpdateEvent';
import { type EventSubChannelSharedChatSessionEndEvent } from './events/EventSubChannelSharedChatSessionEndEvent';
import { type EventSubDropEntitlementGrantEvent } from './events/EventSubDropEntitlementGrantEvent';
import type { EventSubExtensionBitsTransactionCreateEvent } from './events/EventSubExtensionBitsTransactionCreateEvent';
import type { EventSubStreamOfflineEvent } from './events/EventSubStreamOfflineEvent';
import type { EventSubStreamOnlineEvent } from './events/EventSubStreamOnlineEvent';
import type { EventSubUserAuthorizationGrantEvent } from './events/EventSubUserAuthorizationGrantEvent';
import type { EventSubUserAuthorizationRevokeEvent } from './events/EventSubUserAuthorizationRevokeEvent';
import type { EventSubUserUpdateEvent } from './events/EventSubUserUpdateEvent';
import type { EventSubUserWhisperMessageEvent } from './events/EventSubUserWhisperMessageEvent';
import type { EventSubSubscription } from './subscriptions/EventSubSubscription';

/**
 * The common interface of all EventSub listeners.
 */
export interface EventSubListener {
	/**
	 * Starts the listener.
	 */
	start: () => void;

	/**
	 * Stops the listener.
	 */
	stop: () => void;

	/**
	 * Subscribes to events representing a stream going live.
	 *
	 * @param user The user for which to get notifications about their streams going live.
	 * @param handler The function that will be called for any new notifications.
	 */
	onStreamOnline: (
		user: UserIdResolvable,
		handler: (event: EventSubStreamOnlineEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events representing a stream going offline.
	 *
	 * @param user The user for which to get notifications about their streams going offline.
	 * @param handler The function that will be called for any new notifications.
	 */
	onStreamOffline: (
		user: UserIdResolvable,
		handler: (event: EventSubStreamOfflineEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events representing a change in channel metadata, e.g. stream title or category.
	 *
	 * @param user The user for which to get notifications about updates.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelUpdate: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user following a channel.
	 *
	 * @param user The user for which to get notifications about their followers.
	 * @param moderator A user that has permission to read followers in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelFollow: (
		user: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (event: EventSubChannelFollowEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user subscribing to a channel.
	 *
	 * @param user The user for which to get notifications for about their subscribers.
	 * @param handler  The function that will be called for any new notifications.
	 */
	onChannelSubscription: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelSubscriptionEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user gifting a subscription to a channel to someone else.
	 *
	 * @param user The user for which to get notifications for about subscriptions people gift in their channel.
	 * @param handler  The function that will be called for any new notifications.
	 */
	onChannelSubscriptionGift: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelSubscriptionGiftEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user's subscription to a channel being announced.
	 *
	 * @param user The user for which to get notifications for about announced subscriptions.
	 * @param handler  The function that will be called for any new notifications.
	 */
	onChannelSubscriptionMessage: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelSubscriptionMessageEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user's subscription to a channel ending.
	 *
	 * @param user The user for which to get notifications for about ending subscriptions.
	 * @param handler  The function that will be called for any new notifications.
	 */
	onChannelSubscriptionEnd: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelSubscriptionEndEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user cheering some bits.
	 *
	 * @param user The user for which to get notifications for about cheers they get.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelCheer: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelCheerEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a charity campaign starting in a channel.
	 *
	 * @param user The user for which to get notifications about charity campaigns starting.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelCharityCampaignStart: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelCharityCampaignStartEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a charity campaign ending in a channel.
	 *
	 * @param user The user for which to get notifications about charity campaigns ending.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelCharityCampaignStop: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelCharityCampaignStopEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a donation to a charity campaign in a channel.
	 *
	 * @param user The user for which to get notifications about charity campaign donations.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelCharityDonation: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelCharityDonationEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent progress in a charity campaign in a channel.
	 *
	 * @param user The user for which to get notifications about charity campaign progress.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelCharityCampaignProgress: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelCharityCampaignProgressEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user getting banned from a channel.
	 *
	 * @param user The user for which to get notifications for when users get banned in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelBan: (user: UserIdResolvable, handler: (event: EventSubChannelBanEvent) => void) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user getting unbanned from a channel.
	 *
	 * @param user The user for which to get notifications for when users get unbanned in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelUnban: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelUnbanEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent Shield Mode being activated in a channel.
	 *
	 * @param broadcaster The user for which to get notifications for when Shield Mode is activated in their channel.
	 * @param moderator A user that has permission to read Shield Mode status in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelShieldModeBegin: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (event: EventSubChannelShieldModeBeginEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent Shield Mode being deactivated in a channel.
	 *
	 * @param broadcaster The user for which to get notifications for when Shield Mode is deactivated in their channel.
	 * @param moderator A user that has permission to read Shield Mode status in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelShieldModeEnd: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (event: EventSubChannelShieldModeEndEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user getting moderator permissions in a channel.
	 *
	 * @param user The user for which to get notifications for when users get moderator permissions in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelModeratorAdd: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelModeratorEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user losing moderator permissions in a channel.
	 *
	 * @param user The user for which to get notifications for when users lose moderator permissions in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelModeratorRemove: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelModeratorEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a broadcaster raiding another broadcaster.
	 *
	 * @param user The broadcaster for which to get outgoing raid notifications.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRaidFrom: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelRaidEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a broadcaster being raided by another broadcaster.
	 *
	 * @param user The broadcaster for which to get incoming raid notifications.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRaidTo: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelRaidEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a Channel Points reward being added to a channel.
	 *
	 * @param user The user for which to get notifications for when they add a reward to their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRewardAdd: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelRewardEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a Channel Points reward being updated.
	 *
	 * @param user The user for which to get notifications for when they update a reward.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRewardUpdate: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelRewardEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a specific Channel Points reward being updated.
	 *
	 * @param user The user for which to get notifications for when they update the reward.
	 * @param rewardId The ID of the reward for which to get notifications when it is updated.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRewardUpdateForReward: (
		user: UserIdResolvable,
		rewardId: string,
		handler: (data: EventSubChannelRewardEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a Channel Points reward being removed.
	 *
	 * @param user The user for which to get notifications for when they remove a reward.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRewardRemove: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelRewardEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a specific Channel Points reward being removed.
	 *
	 * @param user The user for which to get notifications for when they remove the reward.
	 * @param rewardId The ID of the reward to get notifications for when it is removed.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRewardRemoveForReward: (
		user: UserIdResolvable,
		rewardId: string,
		handler: (data: EventSubChannelRewardEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represents a Channel Points reward being redeemed.
	 *
	 * @param user The user for which to get notifications for when their rewards are redeemed.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRedemptionAdd: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelRedemptionAddEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a specific Channel Points reward being redeemed.
	 *
	 * @param user The user for which to get notifications when their reward is redeemed.
	 * @param rewardId The ID of the reward for which to get notifications when it is redeemed.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRedemptionAddForReward: (
		user: UserIdResolvable,
		rewardId: string,
		handler: (data: EventSubChannelRedemptionAddEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a Channel Points reward being updated by a broadcaster.
	 *
	 * @param user The user for which to get notifications for when they update a reward.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRedemptionUpdate: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelRedemptionUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a specific Channel Points reward being updated by a broadcaster.
	 *
	 * @param user The user for which to get notifications for when they update the reward.
	 * @param rewardId The ID of the reward for which to get notifications when it gets updated.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelRedemptionUpdateForReward: (
		user: UserIdResolvable,
		rewardId: string,
		handler: (data: EventSubChannelRedemptionUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a specific Channel Points automatic reward being redeemed.
	 *
	 * @param user The user for which to get notifications when their automatic reward is redeemed.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelAutomaticRewardRedemptionAdd: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelAutomaticRewardRedemptionAddEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a poll starting in a channel.
	 *
	 * @param user The broadcaster for which to receive poll begin events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelPollBegin: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelPollBeginEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a poll being voted on in a channel.
	 *
	 * @param user The broadcaster for which to receive poll progress events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelPollProgress: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelPollProgressEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a poll ending in a channel.
	 *
	 * @param user The broadcaster for which to receive poll end events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelPollEnd: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelPollEndEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a prediction starting in a channel.
	 *
	 * @param user The broadcaster for which to receive prediction begin events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelPredictionBegin: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelPredictionBeginEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a prediction being voted on in a channel.
	 *
	 * @param user The broadcaster for which to receive prediction progress events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelPredictionProgress: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelPredictionProgressEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a prediction being locked in a channel.
	 *
	 * @param user The broadcaster for which to receive prediction lock events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelPredictionLock: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelPredictionLockEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a prediction ending in a channel.
	 *
	 * @param user The broadcaster for which to receive prediction end events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelPredictionEnd: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelPredictionEndEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a Goal beginning.
	 *
	 * @param user The user for which to get notifications about Goals in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelGoalBegin: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelGoalBeginEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent progress in a Goal in a channel.
	 *
	 * @param user The user for which to get notifications about Goals in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelGoalProgress: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelGoalProgressEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent the end of a Goal in a channel.
	 *
	 * @param user The user for which to get notifications about Goals in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelGoalEnd: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelGoalEndEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a Hype Train beginning.
	 *
	 * @param user The user for which to get notifications about Hype Trains in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelHypeTrainBegin: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelHypeTrainBeginEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent progress in a Hype Train in a channel.
	 *
	 * @param user The user for which to get notifications about Hype Trains in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelHypeTrainProgress: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelHypeTrainProgressEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent the end of a Hype Train in a channel.
	 *
	 * @param user The user for which to get notifications about Hype Trains in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelHypeTrainEnd: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelHypeTrainEndEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a broadcaster shouting out another broadcaster.
	 *
	 * @param broadcaster The broadcaster for which you want to listen to outgoing shoutout events.
	 * @param moderator A user that has permission to see or manage shoutout events in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelShoutoutCreate: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubChannelShoutoutCreateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a broadcaster being shouted out by another broadcaster.
	 *
	 * @param broadcaster The broadcaster for which you want to listen to incoming shoutout events.
	 * @param moderator A user that has permission to see or manage shoutout events in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelShoutoutReceive: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubChannelShoutoutReceiveEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent an ad break beginning in a channel.
	 *
	 * @param user The user for which to get notifications about Hype Trains in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelAdBreakBegin: (
		user: UserIdResolvable,
		handler: (data: EventSubChannelAdBreakBeginEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a channel's chat being cleared.
	 *
	 * @param broadcaster The user for which to get notifications about chat being cleared in their channel.
	 * @param user The user to use for reading the channel's chat.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatClear: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatClearEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user's chat messages being cleared in a channel.
	 *
	 * @param broadcaster The user for which to get notifications about a user's chat messages being cleared in their channel.
	 * @param user The user to use for reading the channel's chat.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatClearUserMessages: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatClearUserMessagesEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a chat message being deleted in a channel.
	 *
	 * @param broadcaster The user for which to get notifications about a chat message being deleted in their channel.
	 * @param user The user to use for reading the channel's chat.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatMessageDelete: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatMessageDeleteEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a chat notification being sent to a channel.
	 *
	 * @param broadcaster The user for which to get chat notifications in their channel.
	 * @param user The user to use for reading the channel's chat.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatNotification: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatNotificationEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a chat message being sent to a channel.
	 *
	 * @param broadcaster The user for which to get chat message notifications in their channel.
	 * @param user The user to use for reading the channel's chat.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatMessage: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatMessageEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent chat settings being updated in a channel.
	 *
	 * @param broadcaster The user for which to get notifications about chat settings being updated in their channel.
	 * @param user The user to use for reading the channel's chat.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatSettingsUpdate: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatSettingsUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent an unban request being created.
	 *
	 * @param broadcaster The user for which to get notifications about unban requests being created in their channel.
	 * @param moderator A user that has permission to read unban requests in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelUnbanRequestCreate: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubChannelUnbanRequestCreateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent an unban request being resolved.
	 *
	 * @param broadcaster The user for which to get notifications about unban requests being resolved in their channel.
	 * @param moderator A user that has permission to read unban requests in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelUnbanRequestResolve: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubChannelUnbanRequestResolveEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a moderator performing an action on a channel.
	 *
	 * This requires the following scopes:
	 * - `moderator:read:blocked_terms` OR `moderator:manage:blocked_terms`
	 * - `moderator:read:chat_settings` OR `moderator:manage:chat_settings`
	 * - `moderator:read:unban_requests` OR `moderator:manage:unban_requests`
	 * - `moderator:read:banned_users` OR `moderator:manage:banned_users`
	 * - `moderator:read:chat_messages` OR `moderator:manage:chat_messages`
	 * - `moderator:read:moderators`
	 * - `moderator:read:vips`
	 *
	 * These scope requirements cannot be checked by the library, so they are just assumed.
	 * Make sure to catch authorization errors yourself.
	 *
	 * @param broadcaster The user for which to get notifications about moderation actions on their channel.
	 * @param moderator The user that has moderator permission on the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelModerate: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubChannelModerationEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user getting VIP status in a channel.
	 *
	 * @param user The user for which to get notifications for when users get VIP status in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelVipAdd: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelVipEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user losing VIP status in a channel.
	 *
	 * @param user The user for which to get notifications for when users lose VIP status in their channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelVipRemove: (
		user: UserIdResolvable,
		handler: (event: EventSubChannelVipEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a warning being acknowledged by a user.
	 *
	 * @param broadcaster The user for which to get notifications about acknowledged warnings in their channel.
	 * @param moderator A user that has permission to read warnings in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelWarningAcknowledge: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubChannelWarningAcknowledgeEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a warning sent to a user.
	 *
	 * @param broadcaster The user for which to get notifications about sent warnings in their channel.
	 * @param moderator A user that has permission to read warnings in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelWarningSend: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubChannelWarningSendEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a suspicious user updated in a channel.
	 *
	 * @param broadcaster The user for which to get notifications about suspicious user updated in their channel.
	 * @param moderator A user that has permission to read suspicious users in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelSuspiciousUserUpdate: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (event: EventSubChannelSuspiciousUserUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a message sent by a suspicious user.
	 *
	 * @param broadcaster The user for which to get notifications about messages sent by suspicious users.
	 * @param moderator A user that has permission to read suspicious users in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelSuspiciousUserMessage: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (event: EventSubChannelSuspiciousUserMessageEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a drop entitlement being granted.
	 *
	 * @param filter The filter to apply for the events.
	 * @param handler The function that will be called for any new notifications.
	 */
	onDropEntitlementGrant: (
		filter: HelixEventSubDropEntitlementGrantFilter,
		handler: (event: EventSubDropEntitlementGrantEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a Bits transaction in an extension.
	 *
	 * @param handler  The function that will be called for any new notifications.
	 */
	onExtensionBitsTransactionCreate: (
		handler: (event: EventSubExtensionBitsTransactionCreateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a chat message being held by AutoMod in a channel.
	 *
	 * @param broadcaster A broadcaster for which to get notifications about the held messages.
	 * @param moderator A user that has permission to manage AutoMod in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onAutoModMessageHold: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubAutoModMessageHoldEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a held chat message by AutoMod being resolved in a channel.
	 *
	 * @param broadcaster A Broadcaster for which to get notifications about resolution of held messages.
	 * @param moderator A user that has permission to manage AutoMod in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onAutoModMessageUpdate: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubAutoModMessageUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events (v2) that represent a chat message being held by AutoMod in a channel.
	 *
	 * @param broadcaster The broadcaster for which to receive notifications about held messages.
	 * @param moderator A user with permission to manage AutoMod in the broadcaster's channel.
	 * @param handler The function that will be called for each new notification.
	 */
	onAutoModMessageHoldV2: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubAutoModMessageHoldV2Event) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events (v2) that represent a held chat message by AutoMod being resolved in a channel.
	 *
	 * @param broadcaster The broadcaster for which to receive notifications about held message resolutions.
	 * @param moderator A user with permission to manage AutoMod in the broadcaster's channel.
	 * @param handler The function that will be called for each new notification.
	 */
	onAutoModMessageUpdateV2: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubAutoModMessageUpdateV2Event) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent the AutoMod settings being updated in a channel.
	 *
	 * @param broadcaster A user for which to get notifications about AutoMod settings update.
	 * @param moderator A user that has permission to manage AutoMod settings in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onAutoModSettingsUpdate: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubAutoModSettingsUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent AutoMod terms being updated in a channel.
	 *
	 * @param broadcaster A user for which to get notifications about AutoMod terms update.
	 * @param moderator A user that has permission to manage AutoMod in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onAutoModTermsUpdate: (
		broadcaster: UserIdResolvable,
		moderator: UserIdResolvable,
		handler: (data: EventSubAutoModTermsUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user's notification about their chat message has been held by AutoMod.
	 *
	 * @param broadcaster A broadcaster in which channel to get notifications about held messages by AutoMod.
	 * @param moderator A user that has permission to read chat in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatUserMessageHold: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatUserMessageHoldEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user's notification about the resolution of a held chat message by AutoMod.
	 *
	 * @param broadcaster The user for which to get notifications about resolution of messages held by AutoMod.
	 * @param moderator A user that has permission to read chat in the broadcaster's channel.
	 * @param handler The function that will be called for any new notifications.
	 */
	onChannelChatUserMessageUpdate: (
		broadcaster: UserIdResolvable,
		user: UserIdResolvable,
		handler: (data: EventSubChannelChatUserMessageUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that indicate the start of a shared chat session in a channel.
	 *
	 * @param broadcaster The user for whom to receive notifications when a shared chat session starts in their channel.
	 * @param handler The function to be called when a new notification is received.
	 */
	onChannelSharedChatSessionBegin: (
		broadcaster: UserIdResolvable,
		handler: (data: EventSubChannelSharedChatSessionBeginEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that indicate updates to a shared chat session in a channel.
	 *
	 * @param broadcaster The user for whom to receive notifications when a shared chat session is updated in their channel.
	 * @param handler The function to be called when a new notification is received.
	 */
	onChannelSharedChatSessionUpdate: (
		broadcaster: UserIdResolvable,
		handler: (data: EventSubChannelSharedChatSessionUpdateEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that indicate the end of a shared chat session in a channel.
	 *
	 * @param broadcaster The user for whom to receive notifications when a shared chat session ends in their channel.
	 * @param handler The function to be called when a new notification is received.
	 */
	onChannelSharedChatSessionEnd: (
		broadcaster: UserIdResolvable,
		handler: (data: EventSubChannelSharedChatSessionEndEvent) => void,
	) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user granting authorization to an application.
	 *
	 * @param handler The function that will be called for any new notifications.
	 */
	onUserAuthorizationGrant: (handler: (data: EventSubUserAuthorizationGrantEvent) => void) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user revoking authorization from an application.
	 *
	 * @param handler The function that will be called for any new notifications.
	 */
	onUserAuthorizationRevoke: (handler: (data: EventSubUserAuthorizationRevokeEvent) => void) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user updating their account details.
	 *
	 * @param user The user for which to get notifications about account updates.
	 * @param handler The function that will be called for any new notifications.
	 */
	onUserUpdate: (user: UserIdResolvable, handler: (data: EventSubUserUpdateEvent) => void) => EventSubSubscription;

	/**
	 * Subscribes to events that represent a user receiving a whisper message from another user.
	 *
	 * @param user The user for which to get notifications about whisper messages.
	 * @param handler The function that will be called for any new notifications.
	 */
	onUserWhisperMessage: (
		user: UserIdResolvable,
		handler: (data: EventSubUserWhisperMessageEvent) => void,
	) => EventSubSubscription;
}
