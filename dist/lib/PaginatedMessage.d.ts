import { APIMessage, Message, MessageOptions, MessageReaction, NewsChannel, ReactionCollector, TextChannel, User } from 'discord.js';
/**
 * This is a [[PaginatedMessage]], a utility to paginate messages (usually embeds).
 * You must either use this class directly or extend it.
 *
 * [[PaginatedMessage]] uses actions, these are essentially reaction emojis, when triggered run the said action.
 * You can utilize your own actions, or you can use the [[PaginatedMessage.defaultActions]].
 * [[PaginatedMessage.defaultActions]] is also static so you can modify these directly.
 *
 * [[PaginatedMessage]] also uses pages, these are simply {@link https://discord.js.org/#/docs/main/stable/class/APIMessage APIMessages}.
 *
 * @example
 * ```typescript
 * const handler = new PaginatedMessage();
 * ```
 *
 * @example
 * ```typescript
 * // To utilize actions you can use the IPaginatedMessageAction by implementing it into a class.
 * // [[PaginatedMessage]] requires you to have the class initialized using `new`.
 *
 * class ForwardAction implements IPaginatedMessageAction {
 *   public id = '▶️';
 *
 *   public run({ handler }) {
 *     if (handler.index !== handler.pages.length - 1) ++handler.index;
 *   }
 * }
 *
 * // You can also give the object directly.
 *
 * const StopAction: IPaginatedMessageAction = {
 *   id: '⏹️',
 *   disableResponseEdit: true,
 *   run: ({ response, collector }) => {
 *     await response.reactions.removeAll();
 *     collector!.stop();
 *   }
 * }```
 *
 */
export declare class PaginatedMessage {
    /**
     * The pages to be converted to [[PaginatedMessage.messages]]
     */
    pages: MessagePage[];
    /**
     * The response message used to edit on page changes.
     */
    response: Message | null;
    /**
     * The collector used for handling reactions.
     */
    collector: ReactionCollector | null;
    /**
     * The pages which were converted from [[PaginatedMessage.pages]]
     */
    messages: (APIMessage | null)[];
    /**
     * The actions which are to be used.
     */
    actions: Map<string, IPaginatedMessageAction>;
    /**
     * The handler's current page/message index.
     */
    index: number;
    /**
     * The amount of time to idle before the paginator is closed. Defaults to `20 * 1000`.
     */
    idle: number;
    /**
     * Constructor for the [[PaginatedMessage]] class
     * @param __namedParameters The [[PaginatedMessageOptions]] for this instance of the [[PaginatedMessage]] class
     */
    constructor({ pages, actions }?: PaginatedMessageOptions);
    /**
     * Sets the handler's current page/message index.
     * @param index The number to set the index to.
     */
    setIndex(index: number): this;
    /**
     * Sets the amount of time to idle before the paginator is closed.
     * @param idle The number to set the idle to.
     */
    setIdle(idle: number): this;
    /**
     * Clears all current actions and sets them. The order given is the order they will be used.
     * @param actions The actions to set.
     */
    setActions(actions: IPaginatedMessageAction[]): this;
    /**
     * Adds actions to the existing ones. The order given is the order they will be used.
     * @param actions The actions to add.
     */
    addActions(actions: IPaginatedMessageAction[]): this;
    /**
     * Adds an action to the existing ones. This will be added as the last action.
     * @param action The action to add.
     */
    addAction(action: IPaginatedMessageAction): this;
    /**
     * Checks whether or not the handler has a specific page.
     * @param index The index to check.
     */
    hasPage(index: number): boolean;
    /**
     * Clears all current pages and messages and sets them. The order given is the order they will be used.
     * @param pages The pages to set.
     */
    setPages(pages: MessagePage[]): this;
    /**
     * Adds a page to the existing ones. This will be added as the last page.
     * @param page The page to add.
     */
    addPage(page: MessagePage): this;
    /**
     * Add pages to the existing ones. The order given is the order they will be used.
     * @param pages The pages to add.
     */
    addPages(pages: MessagePage[]): this;
    /**
     * Executes the [[PaginatedMessage]] and sends the pages corresponding with [[PaginatedMessage.index]].
     * The handler will start collecting reactions and running actions once all actions have been reacted to the message.
     * @param author The author to validate.
     * @param channel The channel to use.
     */
    run(author: User, channel: TextChannel | NewsChannel): Promise<this>;
    /**
     * Executed whenever [[PaginatedMessage.run]] is called.
     */
    resolvePagesOnRun(channel: TextChannel | NewsChannel): Promise<void>;
    /**
     * Executed whenever an action is triggered and resolved.
     * @param index The index to resolve.
     */
    resolvePage(channel: TextChannel | NewsChannel, index: number): Promise<APIMessage>;
    /**
     * Clones the current handler into a new instance.
     */
    clone(): PaginatedMessage;
    /**
     * Sets up the message.
     * @param channel The channel the handler is running at.
     * @param author The author the handler is for.
     */
    protected setUpMessage(channel: TextChannel | NewsChannel, author: User): Promise<void>;
    /**
     * Sets up the message's reactions and the collector.
     * @param channel The channel the handler is running at.
     * @param author The author the handler is for.
     */
    protected setUpReactions(channel: TextChannel | NewsChannel, author: User): Promise<void>;
    /**
     * Handles the load of a page.
     * @param page The page to be loaded.
     * @param channel The channel the paginated message runs at.
     * @param index The index of the current page.
     */
    protected handlePageLoad(page: MessagePage, channel: TextChannel | NewsChannel, index: number): Promise<APIMessage>;
    /**
     * Handles the `collect` event from the collector.
     * @param author The the handler is for.
     * @param channel The channel the handler is running at.
     * @param reaction The reaction that was received.
     * @param user The user that reacted to the message.
     */
    protected handleCollect(author: User, channel: TextChannel | NewsChannel, reaction: MessageReaction, user: User): Promise<void>;
    /**
     * Handles the `end` event from the collector.
     * @param reason The reason for which the collector was ended.
     */
    protected handleEnd(reason: string): Promise<void>;
    /**
     * The default actions of this handler.
     */
    static defaultActions: IPaginatedMessageAction[];
    /**
     * The reasons sent by {@link https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=e-end ReactionCollector#end}
     * event when the message (or its owner) has been deleted.
     */
    static deletionStopReasons: string[];
}
export interface PaginatedMessage {
    constructor: typeof PaginatedMessage;
}
/**
 * @example
 * ```typescript
 * // To utilize actions you can use the [[IPaginatedMessageAction]] by implementing it into a class.
 *
 * class ForwardAction implements IPaginatedMessageAction {
 *   public id = '▶️';
 *
 *   public run({ handler }) {
 *     if (handler.index !== handler.pages.length - 1) ++handler.index;
 *   }
 * }
 *
 * // You can also give the object directly.
 *
 * const StopAction: IPaginatedMessageAction {
 *   id: '⏹️',
 *   disableResponseEdit: true,
 *   run: ({ response, collector }) => {
 *     await response.reactions.removeAll();
 *     collector!.stop();
 *   }
 * }```
 */
export interface IPaginatedMessageAction {
    id: string;
    run(context: PaginatedMessageActionContext): Awaited<unknown>;
}
/**
 * The context to be used in [[IPaginatedMessageAction]].
 */
export interface PaginatedMessageActionContext {
    handler: PaginatedMessage;
    author: User;
    channel: TextChannel | NewsChannel;
    response: Message;
    collector: ReactionCollector;
}
export interface PaginatedMessageOptions {
    pages?: MessagePage[];
    actions?: IPaginatedMessageAction[];
}
/**
 * The pages that are used for [[PaginatedMessage.pages]]
 *
 * Pages can be either an {@link https://discord.js.org/#/docs/main/stable/class/APIMessage APIMessage} directly,
 * or an awaited function which returns an {@link https://discord.js.org/#/docs/main/stable/class/APIMessage APIMessage}.
 *
 * Furthermore, {@link https://discord.js.org/#/docs/main/stable/typedef/MessageOptions MessageOptions} can be used to
 * construct the pages without state, this library also provides [[MessageBuilder]], which can be used as a chainable
 * alternative to raw objects, similar to how {@link https://discord.js.org/#/docs/main/stable/class/MessageEmbed MessageEmbed}
 * works.
 *
 * @example
 * ```typescript
 * // Direct usage as a MessageBuilder
 * new MessageBuilder().setContent('Test content!');
 * ```
 *
 * @example
 * ```typescript
 * // An awaited function. This function also passes index, pages, and handler.
 * (index, pages) =>
 *   new MessageBuilder().setEmbed(
 *     new MessageEmbed().setFooter(`Page ${index + 1} / ${pages.length}`)
 *   );
 * ```
 *
 * @example
 * ```typescript
 * // Direct usage as an APIMessage
 * new APIMessage(message.channel, {
 *   content: 'Test content!',
 * });
 * ```
 *
 * @example
 * ```typescript
 * // An awaited function. This function also passes index, pages, and handler.
 * (index, pages) =>
 *   new APIMessage(message.channel, {
 *     embed: new MessageEmbed().setFooter(`Page ${index + 1} / ${pages.length}`)
 *   });
 * ```
 */
export declare type MessagePage = ((index: number, pages: MessagePage[], handler: PaginatedMessage) => Awaited<APIMessage | MessageOptions>) | APIMessage | MessageOptions;
declare type Awaited<T> = PromiseLike<T> | T;
export {};
//# sourceMappingURL=PaginatedMessage.d.ts.map