import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useConfig, useConfigDispatch } from "../contexts/ConfigContext";
import { availableColors } from "../contexts/configReducer";

function ThemeConfig() {
  const { theme } = useConfig();

  const dispatch = useConfigDispatch();
  return (
    <Card>
      <CardHeader>
        <Heading>Geral</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Tema</FormLabel>
          <RadioGroup value={theme.brandColor}>
            <HStack wrap="wrap">
              {availableColors.map((color) => (
                <Radio
                  key={color}
                  value={color}
                  isChecked={theme.brandColor === color}
                  onChange={() =>
                    dispatch({
                      type: "setTheme",
                      payload: { brandColor: color },
                    })
                  }
                >
                  {color}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default ThemeConfig;
