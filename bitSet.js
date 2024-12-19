class bitSet {
    constructor(size) {
        this.size = size;
        this.bits =  new Uint8Array(Math.ceil(size / 8));
    }

    setBit(pos, val) {
        if (pos < 0 || pos >= this.size) {
            throw newRangeError("Out of range");
        }

        const byteIndex = Math.floor(pos / 8);
        const bitIndex = pos % 8;

        if (val) {
            this.bits[byteIndex] |= (1 << bitIndex);
        } else {
            this.bits[byteIndex] &= ~(1 << bitIndex);
        }
    }


    getBit(pos) {
        if (pos < 0 || pos >= this.size) {
            throw RangeError("out of range");
        }

        const byteIndex = Math.floor(pos / 8);
        const bitIndex = pos % 8;

        return (this.bits[byteIndex] & (1 << bitIndex)) !== 0;
    }
}
