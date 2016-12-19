defmodule Chat.RoomParticipants do
  @moduledoc false

  use Chat.Web, :model

  schema "room_participants" do
    field :joined, Ecto.DateTime
    field :last_seen, Ecto.DateTime
    belongs_to :room, Chat.Room
    belongs_to :participant, Chat.Participant

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:joined, :last_seen, :room, :participant])
    |> validate_required([:joined, :last_seen, :room, :participant])
  end
end
