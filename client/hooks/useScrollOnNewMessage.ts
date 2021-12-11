import { useContext } from "react";
import { ContentRefContext } from "../context/ContentRefContext";

export default function useScrollOnNewMessage() {
  const contentRef = useContext(ContentRefContext);

  function scrollOnNewMessage(scrollNoMatterPosition: boolean = true) {
    const container = contentRef.current;
    const lastMessage = container.querySelector(".messages").lastElementChild as HTMLElement;

    if (lastMessage) {
      const newMessageHeight = lastMessage.offsetHeight + 60;
      const visibleHeight = container.offsetHeight;
      const containerHeight = container.scrollHeight;
      const scrollOffset = container.scrollTop + visibleHeight;

      if (containerHeight - newMessageHeight <= scrollOffset || !scrollNoMatterPosition) {
        lastMessage.scrollIntoView();
      }
    }
  }

  return { scrollOnNewMessage };
}
