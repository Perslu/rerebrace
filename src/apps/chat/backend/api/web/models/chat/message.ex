defmodule Chat.Message do
  @moduledoc false

  use Chat.Web, :model

  schema "messages" do
    field :content, :string
    belongs_to :participant_messages, Chat.ParticipantMessages
    belongs_to :room, Chat.Room

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:content, :participant_messages, :room])
    |> validate_required([:content, :participant_messages, :room])
  end

end
