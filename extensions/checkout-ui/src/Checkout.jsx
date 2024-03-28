import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  Text,
  BlockStack,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <ExpeditedLimits />,
);

function ExpeditedLimits() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <BlockStack title="checkout-ui" inlineAlignment="center">
      <Text size="large" appearance="critical">{translate('expeditedLimits')}</Text>
      <Text size="small">{translate('expeditedContact')}</Text>
      <Text size="large" appearance="critical">{translate('internationlOrders')}</Text>
    </BlockStack>
  );
}