import { getMessages } from "./getMessages";

export function withMessages(PageComponent) {
  return PageComponent;
}

export async function getStaticPropsWithMessages({ locale }) {
  return {
    props: {
      messages: await getMessages(locale),
    },
  };
}
