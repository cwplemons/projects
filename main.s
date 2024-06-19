MOV 0x2D, W0      ;sets pins 27, 25, 24, and 22 to outputs for MISO, SCL, SDA, and UTx.
MOV W0, 0x0401    ;puts the I/O direction values in the Port A Configuration - DIRSET register.
MOV 0x07, W0      ;sets pins 2, 3, and 4 into outputs for 74HC595.
MOV W0, 0x0441    ;puts the I/O direction values in the Port C Configuration - DIRSET register.
