defmodule Chat.Participant do
  @moduledoc false

  use Chat.Web, :model

  schema "participants" do
    field :mongo_user, :string
    field :mongo_token, :string
    field :auth_by, :string
    has_many :messages, Chat.ParticipantMessages
    has_many :rooms, Chat.RoomParticipants

    timestamps()
  end


  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:auth_by, :mongo_user_id, :mongo_token])
    |> validate_required([:auth_by])
    |> validate_inclusion(:auth_by, ["account", "token"])
  end

end
