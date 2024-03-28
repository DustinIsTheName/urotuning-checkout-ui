import {
  Text,
  useApi,
  useTranslate,
  reactExtension,
  useCartLines,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.shipping-option-list.render-before',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const noFreeShippingCount = useCartLines().map((cl) => cl.attributes.filter((l) => l.key === "_noFreeShipping" && l.value === "true")).filter((a) => a.length).length;
  console.log(useCartLines());

  return (
    !!noFreeShippingCount && <Text size="base" appearance="critical">{translate('NotEligible')}</Text>
  );
}