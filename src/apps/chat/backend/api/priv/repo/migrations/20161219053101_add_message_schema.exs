defmodule Chat.Repo.Migrations.AddMessageSchema do
  use Ecto.Migration

  def change do
    create table(:rooms) do
      add :mongo_meeting_id, :string
      timestamps()
    end

    create table(:participants) do
      add :mongo_user, :string
      add :mongo_token, :string
      add :auth_by, :string
      timestamps()
    end

    create table(:participant_messages) do
      add :read_on, :datetime
      add :participant_id, references(:participants)
      timestamps()
    end

    create table(:room_participants) do
      add :joined, :datetime
      add :last_seen, :datetime
      add :participant_id, references(:participants)
      add :room_id, references(:rooms)
      timestamps()
    end

    create table(:messages) do
      add :content, :string
      add :room_id, references(:rooms)
      add :participant_messages_id, references(:participant_messages)
      timestamps()
    end
  end
end
