import { Makech } from '../index';

test("testExport", () => {

    const length = Makech.supportedLaguages[0]
                        .styleSets
                        .length;

    expect(length).toBe(4);
});