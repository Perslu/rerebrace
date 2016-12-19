defmodule Chat.Room do
  @moduledoc false

  use Chat.Web, :model

  schema "rooms" do
    field :meeting_mongo_id, :string
    has_many :messages, Chat.Message
    has_many :room_participants, Chat.RoomParticipants

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:meeting_mongo_id])
    |> validate_required([:meeting_mongo_id])
  end
end
