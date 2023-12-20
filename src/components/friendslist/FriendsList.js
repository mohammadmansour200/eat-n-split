import Friend from "../friend/Friend";

export default function FriendsList({
  friends,
  onSelection,
  selectedFriend,
  setSelectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
