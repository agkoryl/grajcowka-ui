import { _delete } from './methods';

export function deletePlayerFromMeeting(meetingId, playerId, token) {
    let path = `/api/meetings/${meetingId}/leave?player=${playerId}`;
    return _delete(path, {}, token);
}

export function deleteAMeeting(meetingId, token) {
    let path = `/api/meetings/${meetingId}`;
    return _delete(path, {}, token);
}

