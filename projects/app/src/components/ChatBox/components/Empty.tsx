import { useMarkdown } from '@/web/common/hooks/useMarkdown';
import { Box, Card } from '@chakra-ui/react';
import React from 'react';

import dynamic from 'next/dynamic';
const Markdown = dynamic(() => import('@/components/Markdown'), { ssr: false });

const Empty = () => {
  return (
    <Box pt={6} w={'85%'} maxW={'600px'} m={'auto'} alignItems={'center'} justifyContent={'center'}>
      {/* version intro */}
    </Box>
  );
};

export default React.memo(Empty);
