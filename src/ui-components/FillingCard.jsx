/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function FillingCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="333px"
      height="600px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "FillingCard")}
    >
      <Image
        width="333px"
        height="365px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        width="333px"
        height="189px"
        position="absolute"
        top="365px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CardContent")}
      >
        <View
          width="324px"
          position="absolute"
          top="12px"
          bottom="91px"
          left="calc(50% - 162px - -324px)"
          transformOrigin="top left"
          transform="rotate(180deg)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "CardText")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="27px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="278px"
            height="31px"
            position="absolute"
            top="0px"
            left="301px"
            transformOrigin="top left"
            transform="rotate(180deg)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Filling Name"
            {...getOverrideProps(overrides, "Filling Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="278px"
            height="41px"
            position="absolute"
            top="45px"
            left="301px"
            transformOrigin="top left"
            transform="rotate(180deg)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Filling description"
            {...getOverrideProps(overrides, "Filling description")}
          ></Text>
        </View>
      </View>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="535px"
        left="22.5px"
        width="288px"
        justifyContent="center"
        alignItems="center"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Primary Button"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
