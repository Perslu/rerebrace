defmodule Chat.ParticipantMessages do
  @moduledoc false

  use Chat.Web, :model

  schema "participant_messages" do
    field :read_on, Ecto.DateTime
    belongs_to :participant, Chat.Participant
    has_one :message, Chat.Message
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:read_on, :participant])
    |> validate_required([:participant])
  end
end
