import { it, describe, expect } from "vitest";
import { useGoogleMapSetUp } from "../../config/map";
import { CustomPolyline } from "../../shared/models/CustomPolyline";
import { initialize, mockInstances, Polyline } from "@soleo/google-maps-vitest-mocks";


const { mapCommonOption } = useGoogleMapSetUp()

const initialPolyline = () => {
    const map = new google.maps.Map(document.createElement('div'));
    const polyline = new google.maps.Polyline({
      path: [
        new google.maps.LatLng({ lat: 34.40882247741932, lng: 136.6821998287318 }),
        new google.maps.LatLng({ lat: 34.40882247741933, lng: 136.6821998287319 }),
      ],
      ...mapCommonOption,
    });
    polyline.setMap(map);
};

describe('CustomPolylineを編集可能かどうかを判定するメソッドであるisEditableのテスト', () => {
    initialize();
    initialPolyline();

    const mockPolylineList = mockInstances.get(Polyline);

    describe('編集者と作成者が同じの場合', () => {
        const hasAdminRole = false;

        const customizePolyline = new CustomPolyline(
            '01HY05BFHVNKRT3KSEP440Q845',
            mockPolylineList[0],
            '#ffffff',
            1,
            1
        );

        it('編集可能かどうかを判定するメソッドの戻り値がtrueであること', () => {
            expect(customizePolyline.isEditable(hasAdminRole)).toBe(true);
        })
    }),

    describe('編集者と作成者が同じでない場合', () => {
        const hasAdminRole = false;

        const customizePolyline = new CustomPolyline(
            '01HY05BFHVNKRT3KSEP440Q845',
            mockPolylineList[0],
            '#ffffff',
            1,
            2
        );

        it('編集可能かどうかを判定するメソッドの戻り値がfalseであること', () => {
            expect(customizePolyline.isEditable(hasAdminRole)).toBe(false);
        })
    }),

    describe('操作者が管理者の場合', () => {
        const hasAdminRole = true;
        it('編集者と作成者が同じの場合、編集可能かどうかを判定するメソッドの戻り値がtrueであること', () => {
            const customizePolyline = new CustomPolyline(
                '01HY05BFHVNKRT3KSEP440Q845',
                mockPolylineList[0],
                '#ffffff',
                1,
                1
            );

            expect(customizePolyline.isEditable(hasAdminRole)).toBe(true);
        })

        it('編集者と作成者が同じでない場合、編集可能かどうかを判定するメソッドの戻り値がtrueであること', () => {
            const customizePolyline = new CustomPolyline(
                '01HY05BFHVNKRT3KSEP440Q845',
                mockPolylineList[0],
                '#ffffff',
                1,
                2
            );

            expect(customizePolyline.isEditable(hasAdminRole)).toBe(true);
        })
    })
})