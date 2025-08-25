declare module "@xivapi/nodestone" {
	import { Request } from "express";

	export declare abstract class PageParser<P, T> {
		parse(req: { params: P }, columnsPrefix?: string): Promise<T>;
	}

	export declare abstract class PaginatedPageParser<P, T> extends PageParser<P, PaginatedParseResult<T>> {}

	export interface PaginatedParseResult<T> {
		List: T[];
		Pagination: {
			Page: number;
			PageTotal: number;
			PageNext: number | null;
			PagePrevious: number | null;
		};
	}

	export declare class FCMembers extends PaginatedPageParser<{ fcId: string }, FCMembersParseResult> {}

	export interface FCMembersParseResult {
		Avatar: string;
		ID: number;
		Name: string;
		FcRank: string;
		FcRankIcon: string;
		RankName: string;
		RankIcon: string;
		World: string;
		DC: string;
	}
}
