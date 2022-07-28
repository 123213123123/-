Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("为指定的玩家播放声音")
          .appendField("声音文件路径")
          .appendField(new Blockly.FieldTextInput("必填"), "NAME")
          .appendField("音量增益(选填)")
          .appendField(new Blockly.FieldNumber(1), "NAME")
          .appendField("音高增益(选填)")
          .appendField(new Blockly.FieldNumber(1), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };