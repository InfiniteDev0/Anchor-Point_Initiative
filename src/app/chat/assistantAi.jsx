import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { RealtimeChat } from "@/components/realtime-chat";

export default function AssistantAi({
  roomName = "ai-assistant",
  username = "You",
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <SheetHeader>
        <SheetTitle>AI Assistant</SheetTitle>
      </SheetHeader>
      <div className="flex-1 overflow-y-auto">
        <RealtimeChat
          roomName={roomName}
          username={username}
          autoFocus={false}
        />
      </div>
    </div>
  );
}
