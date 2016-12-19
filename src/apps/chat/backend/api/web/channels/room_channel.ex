defmodule Chat.RoomChannel do
  @moduledoc false
  use Chat.Web, :channel
  alias Chat.Presence

#  intercept ["new_msg"]

  def join("room:lobby", _message, socket) do
    send self(), :after_join
    {:ok, socket}
  end

  def join("room:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_info(:after_join, socket) do
    Presence.track(socket, socket.assigns.user, %{
      joined: :os.system_time(:milli_seconds)
    })
    push socket, "presence_state", Presence.list(socket)
    {:noreply, socket}
  end

  def handle_in("message_new", message, socket) do
    broadcast! socket, "message_new", %{
      user: socket.assigns.user,
      body: message,
      timestamp: :os.system_time(:milli_seconds)
    }
    {:noreply, socket}
  end

#  def handle_out("new_msg", %{"body" => body}, socket) do
#    push socket, "new_msg", %{"body" => "Revised " <> body}
#    {:noreply, socket}
#  end
end
