import FriendsList from "../friendslist/FriendsList";
import AddFriendForm from "../addfriendform/AddFriendForm";
import Button from "../button/Button";
import SplitBillForm from "../splitbillform/SplitBillForm";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Uncle",
    image: "https://i.pravatar.cc/48?u=2",
    balance: -7,
  },
  {
    id: 933372,
    name: "Bro",
    image: "https://i.pravatar.cc/48?u=4994",
    balance: 20,
  },
  {
    id: 499476,
    name: "3am",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriendForm((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriendForm(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />

        {showAddFriendForm && <AddFriendForm onSetFriends={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {!showAddFriendForm ? "Add friend" : "Close"}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
