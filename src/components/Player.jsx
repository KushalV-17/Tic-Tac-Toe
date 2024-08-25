import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playername, SetPlayerName] = useState(initialName);
  const [isEditing, SetIsEditing] = useState(false);

  function handleEditClick() {
    SetIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playername);
    }
  }

  function handleChange(event) {
    SetPlayerName(event.target.value);
  }

  let editplayername = <span className="player-name">{playername}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editplayername = (
      <input type="text" required value={playername} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editplayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
