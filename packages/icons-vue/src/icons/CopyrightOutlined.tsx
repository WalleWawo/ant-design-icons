// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopyrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightOutlinedSvg}></AntdIcon>;
};

CopyrightOutlined.displayName = 'CopyrightOutlined';
CopyrightOutlined.inheritAttrs = false;
export default CopyrightOutlined;