import { Box, IconButton, TextField } from '@mui/material';
import React from 'react';
import { Accordion } from '../../../components';
import FilterMenu from '../../../components/Menus/FilterMenu';
export const list = [
  'Doctors Note',
  'Clinical Note',
  'Lab Result',
  'Progress Note',
];
interface DocumentationProps {
  onAddDocument: () => void;
}

const Documentation: React.FC<DocumentationProps> = ({ onAddDocument }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { lg: 'row', sm: 'column', xs: 'column' },
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            margin: { xs: '10px 0', lg: '24px 0' },
            width: { xs: '100%' },
            // flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <TextField
            variant='outlined'
            size='small'
            sx={{
              width: { lg: '320px', xs: '55%' },
              // height: '40px',
              borderRadius: '4px',
              marginRight: '10px',
              mb: { xs: 1 },
            }}
          />
          <FilterMenu />
        </Box>
        <IconButton
          sx={{
            width: { lg: '160px', xs: '100%' },
            p: 1,
            pt: 2,
            pb: 2,
            borderRadius: '8px',
            background: '#fafafa',
          }}
          onClick={onAddDocument}
        >
          Add Document
        </IconButton>
        {/* <AddDocumentMenu list={list} handleClick={onAddDocument} /> */}
      </Box>
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
    </Box>
  );
};

export default Documentation;
