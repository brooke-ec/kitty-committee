import { FCMembers, type FCMembersParseResult, type PaginatedParseResult } from "@xivapi/nodestone";

const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
const FC_ID = "9235053248388344200";

let cache: { data: PaginatedParseResult<FCMembersParseResult> | null; timestamp: number } = {
	data: null,
	timestamp: 0,
};

export async function getMembers() {
	if (cache.data && Date.now() - cache.timestamp < CACHE_DURATION) return cache.data;
	else {
		const data = await new FCMembers().parse({ params: { fcId: FC_ID } });
		cache = { data, timestamp: Date.now() };
		return data;
	}
}
