```verilog
// ALU integration into CPU datapath

module cpu_datapath (
    input wire clk,
    input wire rst_n,
    input wire [3:0] alu_op,    // ALU operation select
    input wire alu_src_a_sel,   // Select A input to ALU
    input wire [1:0] alu_src_b_sel, // Select B input to ALU
    input wire [31:0] imm,      // Immediate value
    input wire [4:0] rd_addr,   // Destination register address
    input wire reg_write_en,    // Register write enable
    output wire zero_flag,      // Zero flag output
    output wire neg_flag,       // Negative flag output
    output wire [31:0] result   // ALU result output
);

// Internal signals
wire [31:0] reg_data_a, reg_data_b;
wire [31:0] alu_src_a, alu_src_b;

// Register file instantiation
reg_file reg_file_inst (
    .clk(clk),
    .rst_n(rst_n),
    .rd_addr(rd_addr),
    .rs1_addr(rs1_addr),
    .rs2_addr(rs2_addr),
    .write_data(result),
    .write_en(reg_write_en),
    .read_data_a(reg_data_a),
    .read_data_b(reg_data_b)
);

// ALU source A mux
assign alu_src_a = alu_src_a_sel ? pc : reg_data_a;

// ALU source B mux
always @(*) begin
    case (alu_src_b_sel)
        2'b00: alu_src_b = reg_data_b;
        2'b01: alu_src_b = imm;
        2'b10: alu_src_b = 32'd4; // For PC+4
        default: alu_src_b = 32'b0;
    endcase
end

// ALU instantiation
alu alu_inst (
    .a(alu_src_a),
    .b(alu_src_b),
    .op(alu_op),
    .result(result),
    .zero_flag(zero_flag),
    .neg_flag(neg_flag)
);

endmodule
```