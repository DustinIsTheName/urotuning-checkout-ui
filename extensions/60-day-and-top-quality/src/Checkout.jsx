import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  InlineLayout,
  Image,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <InlineLayout inlineAlignment="center" columns={['50%', '50%']} title="60-day-and-top-quality">
      <Image source="https://cdn.shopify.com/s/files/1/0005/7773/2663/files/60-day.jpg?v=1707345315" />
      <Image source="https://cdn.shopify.com/s/files/1/0005/7773/2663/files/top-quality.jpg?v=1707345315" />
    </InlineLayout>
  );
}