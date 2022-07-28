Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("Number")
          .appendField("增加实体")
          .appendField(new Blockly.FieldDropdown([["每秒产生粒子数量的随机性","OPTIONNAME"], ["所产生粒子存活时间的随机性","OPTIONNAME"], ["所产生粒子大小的随机性","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };