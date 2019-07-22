import { get } from './methods';

export function deletePlayerFromMeeting(meetingId, playerId, token) {
    let path = `/api/meetings/${meetingId}/leave?player=${playerId}`;
    return get(path, {}, token);
}


