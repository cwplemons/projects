;----------------------------------------------------------------------------------------------------------------------------
;MAIN PROGRAM
;----------------------------------------------------------------------------------------------------------------------------

_setup:
  CALL _osc_config
  CALL _io_init
  CALL _spi_init
  CALL _uart_init
_loop:
  CALL _input0_get
  CALL _input1_get
_done:
  CALL _done

;----------------------------------------------------------------------------------------------------------------------------
;SUBROUTINES
;----------------------------------------------------------------------------------------------------------------------------

_osc_config:
  MOV 0x0003, W0
  MOV W0, FOSCSEL
  NOP
  RETURN
  
_io_init:
  MOV 0x0000, W0
  MOV W0, TRISA
  NOP
  MOV W0, TRISB
  NOP
  RETURN
  
_spi_init:
  BSET, SPI1CON1, #5
  NOP
  BCLR SPI1STAT, #6
  NOP
  BSET SPI1STAT, #15
  NOP
  RETURN

_uart_init:
  BSET U1MODE, #15
  NOP
  MOV 0x0236, W0
  RETURN
